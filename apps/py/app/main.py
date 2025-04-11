from fastapi import FastAPI

app = FastAPI()

@app.get('/')
async def root():
  return "Tamo competindo, tamo competindo!"