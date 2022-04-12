from xmlrpc import client
import datetime

url = "http://localhost:8080/RPC2"
proxy = client.ServerProxy(url)




def vi2en(vi):
    text = vi
    params = {"text":text}
    en = proxy.translate(params)
    return en