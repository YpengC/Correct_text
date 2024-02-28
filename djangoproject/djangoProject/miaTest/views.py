from django.shortcuts import render
from django.shortcuts import HttpResponse
import operator
import torch
import json
from django.http.response import *
from django.core import serializers
from miaTest.views import *
from transformers import BertTokenizer, BertForMaskedLM
# 将请求定位到index.html文件中
from django.template.context_processors import request


def index(request):
    return render(request, 'index.html')


def miaIndexx(request):
    text = request.GET.get('texts')
    print(text)
    texts = []
    texts.append(text)
    print(texts)

    device = torch.device("cuda" if torch.cuda.is_available() else "cpu")

    tokenizer = BertTokenizer.from_pretrained("shibing624/macbert4csc-base-chinese")
    model = BertForMaskedLM.from_pretrained("shibing624/macbert4csc-base-chinese")
    model = model.to(device)
    with torch.no_grad():
        outputs = model(**tokenizer(texts, padding=True, return_tensors='pt').to(device))

    def get_errors(corrected_text, origin_text):
        sub_details = []
        for i, ori_char in enumerate(origin_text):
            if ori_char in [' ', '“', '”', '‘', '’', '琊', '\n', '…', '—', '擤']:
                # add unk word
                corrected_text = corrected_text[:i] + ori_char + corrected_text[i:]
                continue
            if i >= len(corrected_text):
                continue
            if ori_char != corrected_text[i]:
                if ori_char.lower() == corrected_text[i]:
                    # pass english upper char
                    corrected_text = corrected_text[:i] + ori_char + corrected_text[i + 1:]
                    continue
                sub_details.append((ori_char, corrected_text[i], i, i + 1))
        sub_details = sorted(sub_details, key=operator.itemgetter(2))
        return corrected_text, sub_details

    result = []
    for ids, text in zip(outputs.logits, texts):
        _text = tokenizer.decode(torch.argmax(ids, dim=-1), skip_special_tokens=True).replace(' ', '')
        corrected_text = _text[:len(text)]
        corrected_text, details = get_errors(corrected_text, text)
        print(text, ' => ', corrected_text, details)
        result.append((corrected_text, details))
    print(result)
    # return render(request, "indexx.html", {"result": result, })
    return render(request, {"result": result, })
