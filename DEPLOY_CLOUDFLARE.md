# Deploy no Cloudflare Pages

## Instruções de Deploy

### 1. Build do Projeto
```bash
pnpm install
pnpm build
```

### 2. Arquivos Necessários
- ✅ `_redirects` - Redireciona todas as rotas para index.html
- ✅ `_headers` - Headers de segurança e cache
- ✅ `wrangler.toml` - Configuração do Cloudflare
- ✅ `dist/` - Pasta com arquivos compilados

### 3. Deploy via GitHub
1. Conecte seu repositório GitHub ao Cloudflare Pages
2. Configure o build command: `pnpm build`
3. Configure a pasta de output: `dist`
4. Deploy automático a cada push!

### 4. Configurações Importantes
- **Build Command**: `pnpm build`
- **Output Directory**: `dist`
- **Framework**: Vite + React
- **Node Version**: 18+

### 5. Variáveis de Ambiente (se necessário)
Adicione no Cloudflare Pages:
```
VITE_API_URL=https://sua-api.com
```

## Troubleshooting

### Erro: "Cannot find index.html"
✅ Solução: Arquivo `_redirects` redireciona automaticamente

### Erro: "404 em rotas internas"
✅ Solução: Verifique se `_redirects` está em `client/public/`

### Erro: "Estilos não carregam"
✅ Solução: Verifique cache - limpe no Cloudflare Dashboard

## Estrutura de Deploy
```
dist/
├── index.html
├── _redirects
├── _headers
├── assets/
│   ├── *.js
│   ├── *.css
│   └── *.woff2
└── ...
```

Tudo pronto para deploy! 🚀
