# 🚀 Deploy Athletic Academia — Passo a Passo

## O que você vai substituir no projeto

Antes de subir no GitHub, substitua 3 arquivos na raiz do projeto:

| Arquivo | Onde colocar |
|---|---|
| `vite.config.ts` | raiz do projeto (substituir o original) |
| `netlify.toml` | raiz do projeto (arquivo novo) |
| `index.html` | dentro da pasta `client/` (substituir o original) |

---

## Passo 1 — Subir no GitHub

1. Acesse **github.com** e crie uma conta (grátis)
2. Clique em **"New repository"**
3. Nome: `athletic-academia` → clique **"Create repository"**
4. Faça upload de todos os arquivos do projeto arrastando para a página

---

## Passo 2 — Deploy no Netlify

1. Acesse **netlify.com** e crie conta com o mesmo e-mail do GitHub
2. Clique em **"Add new site"** → **"Import an existing project"**
3. Escolha **GitHub** → selecione o repositório `athletic-academia`
4. O Netlify já vai ler o `netlify.toml` automaticamente ✅
5. Clique em **"Deploy site"**
6. Aguarde ~2 minutos — o site fica no ar em `algo.netlify.app`

---

## Passo 3 — Domínio personalizado grátis

### Opção A: Manter o domínio Netlify (ex: `athletic-academia.netlify.app`)
- Já funciona automaticamente, sem custo nenhum

### Opção B: Domínio `.com.br` (R$ 40/ano no Registro.br — não é grátis)
- Acesse **registro.br** → registre o domínio
- No Netlify: **Site settings → Domain management → Add custom domain**
- Aponte os DNS do Registro.br para o Netlify

### Opção C: Domínio grátis real (`.tk`, `.ml`, `.ga`)
- Acesse **freenom.com** → busque o nome desejado
- Registre gratuitamente por 1 ano
- No Netlify: **Domain management → Add custom domain**

---

## ✅ HTTPS (cadeadinho verde)
O Netlify ativa SSL grátis automaticamente. Nenhuma configuração necessária.

---

## ⚠️ Lembrete importante
O login com Google no site é **apenas visual** (demonstração).
Para autenticação real, precisaria integrar o Google OAuth 2.0.
