import json
import re
from html.parser import HTMLParser

class MLStripper(HTMLParser):
    def __init__(self):
        super().__init__()
        self.reset()
        self.strict = False
        self.convert_charrefs = True
        self.text = []
        self.tags = []

    def handle_starttag(self, tag, attrs):
        self.tags.append(tag)
        attrs_dict = dict(attrs)
        if tag in ['section', 'h1', 'h2', 'h3', 'h4', 'nav', 'footer', 'button', 'a']:
            self.text.append(f"\n[STARTTAG: {tag} attrs={attrs_dict}]\n")

    def handle_endtag(self, tag):
        if tag in ['section', 'h1', 'h2', 'h3', 'h4', 'nav', 'footer', 'button', 'a']:
            self.text.append(f"\n[ENDTAG: {tag}]\n")

    def handle_data(self, d):
        clean_d = d.strip()
        if clean_d:
            self.text.append(f" {clean_d} ")

    def get_data(self):
        return ''.join(self.text)

def strip_tags(html):
    s = MLStripper()
    s.feed(html)
    return s.get_data()

with open(r"C:\Users\yashi\.gemini\antigravity\brain\7ab7b1b8-f88d-404a-9f68-326f59e73648\.system_generated\steps\2345\content.md", "r", encoding="utf-8") as f:
    content = f.read()

# Find the html content in content.md
html_start = content.find("<!DOCTYPE html>")
if html_start != -1:
    html_content = content[html_start:]
else:
    html_content = content

clean_text = strip_tags(html_content)

# Simplify multiple newlines
clean_text = re.sub(r'\n\s*\n', '\n\n', clean_text)

with open("parsed_iris.txt", "w", encoding="utf-8") as f:
    f.write(clean_text)

print("Done! Parsed structure saved to parsed_iris.txt")
