import os
import urllib.request

# Define image URLs to fetch
urls = {
    "Logo.png": "https://irisaiw.vercel.app/img/Logo.png",
    "screen.png": "https://irisaiw.vercel.app/img/screen.png",
    "cli.png": "https://irisaiw.vercel.app/img/cli.png",
    "iris-future.png": "https://irisaiw.vercel.app/img/iris-future.png",
    "graphic.webp": "https://irisaiw.vercel.app/img/graphic.webp",
    "tryiris.png": "https://irisaiw.vercel.app/img/tryiris.png",
    "bright-neon-bg.png": "https://irisaiw.vercel.app/img/bright-neon-bg.png"
}

output_dir = r"c:\Users\yashi\Downloads\VYRON AI BUILD\vyron-ai\web\public\img"
os.makedirs(output_dir, exist_ok=True)

for filename, url in urls.items():
    dest_path = os.path.join(output_dir, filename)
    print(f"Downloading {url} to {dest_path}...")
    try:
        urllib.request.urlretrieve(url, dest_path)
        print(f"OK: Downloaded {filename} successfully ({os.path.getsize(dest_path)} bytes)")
    except Exception as e:
        print(f"ERR: Failed to download {filename}: {e}")

print("Asset download process completed.")
