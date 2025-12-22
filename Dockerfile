FROM ubuntu:22.04

RUN apt-get update && apt-get install -y curl unzip && apt-get clean

WORKDIR /botpress

# 🔹 Scarica automaticamente Botpress 12.38.3 (o la tua versione)
RUN curl -L -o bp.zip https://github.com/botpress/botpress/releases/download/12.38.3/botpress-v12_38_3-linux-x64.zip \
    && unzip bp.zip && rm bp.zip

# Copia i tuoi file locali (config, bot, ecc.)
COPY . .

EXPOSE 4000

CMD ["./bp"]
