from xmlrpc import client
import datetime

vi2en_url = "http://localhost:8080/RPC2"
vi2en_proxy = client.ServerProxy(vi2en_url)

en2vi_url = "http://localhost:8081/RPC2"
en2vi_proxy = client.ServerProxy(en2vi_url)


def v2e(vi):
    text = vi
    params = {"text": text}
    en = vi2en_proxy.translate(params)
    return en


def e2v(vi):
    text = vi
    params = {"text": text}
    en = en2vi_proxy.translate(params)
    return en
