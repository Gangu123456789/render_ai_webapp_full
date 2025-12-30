Render Deployment Instructions
------------------------------
1) Push this folder to a GitHub repository
2) Go to https://render.com → New → Web Service
3) Select the repo
4) Set:
   Build Command: pip install -r requirements.txt
   Start Command: python backend/app.py
5) Deploy → Open the URL Render gives you
   Homepage: /
   API: /api/data
