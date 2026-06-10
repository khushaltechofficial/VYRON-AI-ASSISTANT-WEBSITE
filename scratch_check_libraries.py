import re

target_path = r"C:\Users\yashi\.gemini\antigravity\brain\7ab7b1b8-f88d-404a-9f68-326f59e73648\.system_generated\steps\5537\content.md"

with open(target_path, "r", encoding="utf-8") as f:
    content = f.read()

# Let's search for keywords
keywords = ["lenis", "gsap", "locomotive", "scrolltrigger", "scroll", "animation", "motion", "smooth"]
for kw in keywords:
    count = len(re.findall(re.escape(kw), content, re.IGNORECASE))
    print(f"Keyword '{kw}' found {count} times")
