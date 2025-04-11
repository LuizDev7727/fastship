FROM python:3.13-slim-bullseye

# Install uv.
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

# Copy the application into the container.
COPY . /app

# Veja o que foi copiado
RUN echo "Conteúdo de /app:" && ls -la /app && echo "Conteúdo de /app/app:" && ls -la /app/app

# Install the application dependencies.
WORKDIR /app
RUN uv sync --frozen --no-cache

# Run the application.
ENTRYPOINT ["/app/.venv/bin/fastapi", "run", "app/main.py", "--port", "80"]