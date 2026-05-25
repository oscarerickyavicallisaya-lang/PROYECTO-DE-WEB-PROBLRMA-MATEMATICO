# Desafío Web — Fibonacci y Números Primos

> Matemáticas que resuelven problemas del mundo real

## Descripción

Página web interactiva que genera la **serie de Fibonacci** y detecta cuáles términos son **números primos**, aplicado a un plan de ahorro progresivo.

## Problema real que resuelve

Una persona desea ahorrar dinero durante varios meses usando la serie de Fibonacci para aumentar su ahorro de forma gradual. Adicionalmente, se identifican cuáles montos son números primos, lo que los hace especialmente únicos.

## Algoritmo utilizado

### Serie de Fibonacci (sin arrays)
```javascript
let a = 0, b = 1, c;
// En cada iteración:
c = a + b;
a = b;
b = c;
```

### Verificación de número primo
```javascript
let contador = 0;
for (let i = 1; i <= numero; i++) {
  if (numero % i == 0) contador++;
}
if (contador == 2) { /* es primo */ }
```

## Tecnologías

- HTML5
- CSS3 (diseño responsivo)
- JavaScript (vanilla)

## Requisitos cumplidos

- [x] Usa `document.getElementById()` para toda interacción con el DOM
- [x] Formulario para ingresar datos
- [x] Resultados mostrados en pantalla (no en consola)
- [x] Diseño responsivo (móvil, tablet, escritorio)
- [x] Código organizado en HTML, CSS y JS separados
- [x] Fibonacci implementado sin arrays
- [x] Verificación de primos con contador de divisores

## Estructura del proyecto

```
desafio-fibonacci-primos/
│
├── index.html
├── css/
│   └── estilos.css
├── js/
│   └── script.js
└── README.md
```

## Cómo usar

1. Ingresar el número de términos (entre 1 y 50)
2. Opcionalmente ingresar un ahorro base en Bolivianos
3. Presionar **Calcular**
4. Ver la secuencia, tabla de ahorro y primos encontrados

## Links

- **Repositorio:** https://github.com/tu-usuario/desafio-fibonacci-primos
- **Página publicada:** https://tu-usuario.github.io/desafio-fibonacci-primos

---

Desafío Web 2025 · HTML + CSS + JavaScript