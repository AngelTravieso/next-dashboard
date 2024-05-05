Next Dashboard (Pokémon)

### Levantar proyecto en desarrollo:

```
npm run dev
```

### Hacer build de producción

```
npm run build
```

### Ejecutar build de la aplicación (debe haber corrido antes el build)

```
npm run start
```

## Crear imagen:

docker build [tag] [name] [dockerfile]

PD: *.* => para indicar que el dockerfile está en el directorio raíz de la aplicación

```
docker build -t next-first-steps .
```

## Ejecutar contenedor:

docker container run -p -d [port]:[port-docker] [image name] [dockerfile]

```
docker container run -dp 3000:3000 next-first-steps
```
