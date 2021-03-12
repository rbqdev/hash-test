Toasts functions are wrapped by the useToast hook, 
and handled on context of ToastProvider by default.

```javascript
<ToastProvider>
  Childrens
</ToastProvider>
```

Toasts are then dispatched from the useToast hook

```javascript
const { dispatchToast } = useToast()

dispatchToast({ title: 'My Toast', type: 'error', duration: 3000 })
```

Toast types have four types by default: **"success" | "error" | "warning" | "info"**;