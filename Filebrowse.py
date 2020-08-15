# pip install browsepy pyngrok

from browsepy import __main__, app
from pyngrok import ngrok

public_url = ngrok.connect(5000)
print(public_url)
app.run()
