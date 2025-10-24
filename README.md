[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/-AyI-exr)
# Prueba Corta 4 — Ecommerce con React + Redux (TypeScript)

## 📋 Descripción

Realiza una App ecommerce básica que consume una API pública para mostrar productos, usa Redux (o Redux Toolkit) para estado global y persiste el carrito entre sesiones. UI con Tailwind + MUI + DaisyUI.

Enlace de la api pública sugerida: [Fake Store API](https://fakestoreapi.com/).

## 🎯 Objetivo
Desarrollar una tienda simple que demuestre:
- Manejo de estado global con Redux (patrón Flux).
- Consumo de API pública para productos.
- Persistencia del carrito (ej. localStorage).
- Interfaz limpia (Tailwind + MUI + DaisyUI).

## Páginas obligatorias
- / — Landing (home)
- /products — Lista de productos (desde la API)
- /cart — Carrito (artículos, cantidad, total, actualizar/eliminar/checkout)

## Requisitos mínimos
- React + TypeScript.
- Redux o Redux Toolkit para el estado global.
- Carrito gestionado por Redux.
- Persistencia del carrito (localStorage o similar).
- Consumo de API pública (nombre, imagen, precio, descripción).
- UI con Tailwind + MUI + DaisyUI.
- Navegación (React Router u otra).
- Indicadores de carga y manejo básico de errores.

## Sugerencias de implementación
- Crear el store y slices/reducers antes de los componentes.
- Serializar/rehidratar el estado del carrito en localStorage.
- Usar spinners o skeletons mientras cargas productos.
- Priorizar lógica y experiencia; estilo sencillo es suficiente.
- Escribir pequeños tests para reducers/funciones utilitarias si hay tiempo.

## Manejo de estados UI
- Loading: mostrar spinner/skeleton.
- Empty states: indicar cuando no hay productos o carrito vacío.
