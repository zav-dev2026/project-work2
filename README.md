# Istruzioni per eseguire l'applicazione

### Database

Una volta clonato il repository, bisogna creare il database MySQL.
Per poter utilizzare il db bisogna prima avviare il server da
XAMPP.

Dopodichè in un DBMS creiamo il db o dalla GUI o lanciamo il seguente comando.

```sql
CREATE SCHEMA `project-work2`
```

### Backend Laravel

All'interno della root directory dell'applicazione laravel
installare le dipendenze

```bash
composer install
```

Creare una copia del file .env.example rinominandolo .env
e generare una chiave di cifratura nuova

```bash
php artisan key:generate
```

All'interno del file .env decommentare e popolare questa sezione

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=project-work2
DB_USERNAME=root
DB_PASSWORD=
```

Setup delle tabelle database, e seeding:

```bash
php artisan migrate --seed
```

### Frontend Angular

All'interno della root directory dell'applicazione angular frontend
installare le dipendenze

```
npm install
```

## Avvio completo

Quindi, avendo il server db avviato, lanciamo dalle rispettive
directory i seguenti comandi

Angular servito su http://localhost:4200

```bash
ng serve
```

Laravel servito su http://127.0.0.1:8000

```bash
php artisan serve
```

# Descrizione del progetto

Il progetto è una semplice applicazione fullstack con una relazione 1 a N di record nel db

# Processo di sviluppo

Nel partire col progetto considero due aspetti fondamentali:

- il dataset
- i contratti api

### Dataset

Definendo il modello dati, posso iniziare a ragionare sulla sua
implementazione effettiva nel db, e iniziare a dichiarare il
tipo di dato e la sua DTO, all'interno del mio progetto, ad esempio
come tipo di ritorno negli endpoint API e di conseguenza come
tipo aspettato dal frontend.

##### DTO

Data Transfer Object, è un modello dati corrispondente alla sua
implementazione effettiva nel db, ma della quale non espone tutti
i dati ma solo quelli ritenuti fruibili dal frontend.
In questo caso corrisponde all'implementazione delle
classi API resources in Laravel.

### Contratti API

Definendo i contratti API riesco ad avere da subito una logica
di riferimento per costruire le richieste http, in questo caso
all'interno dei servizi dell'app frontend, inoltre mi dà anche
un'idea di che quanti e quali parametri devo passare per effettuare
le chiamate.

### Backend

Logicamente, il punto di partenza a livello di sviluppo è il backend
perchè possiamo subito testare le chiamate sugli endpoint senza
avere il frontend pronto, usando postman, oppure anche direttamente
dall'applicazione lanciata.
Assicurandosi di avere il backend funzionante posso spostarmi
sullo sviluppo frontend avendo in mente la logica delle chiamate.

#### Database

Per implementare il database, invece di creare le tabelle con SQL
mi appoggio alle migration.
La potenza delle migration nasce dal fatto che possiamo mappare
le relazioni che hanno i record nel db a classi PHP e lasciare
che il framework Laravel si occupi della loro gestione.

Inoltre invece di popolare il dataset con linguaggio SQL mi appoggio al
seeder nativo del framework laravel.

### Frontend

Partiamo anche qui dal modello dati, in modo tale da rispecchiare
il modello DTO del backend e poter popolare le proprietà dei
componenti che vogliamo usare nel template come anche il tipo
di ritorno nel nostro servizio che chiama l'API.

## Comandi utilizzati per lo sviluppo

Creazione del progetto backend da cli

```bash
composer create-project laravel/laravel app-backend
```

Per coerenza con l'ambiente di sviluppo disponibile si può forzare la versione 12.12.2

```bash
composer create-project laravel/laravel:12.12.2 {nome-app}
```

Setup del file .env

Creazione dei modelli con flag che il relativo file di migration

```bash
php artisan make:model {Nome modello} -m
```

(Definire la relazione all'interno del modello)

Aggiunta della rotta api col seguente comando

```bash
php artisan install:api
```

Aggiunta dei controller api

```bash
php artisan make:controller Api/{Nome}Controller --api
```

Creazione delle api resource (DTO)

```bash
php artisan make:resource {Nome}Resource
```

Creazione di database seeder

```bash
php artisan make:seeder {Nome}Seeder
```

Nota: per utilizzare il seeder, bisogna dichiare le proprietà
all'interno del modello nell'array $fillable, affinchè
il framework non ne prevenga il popolamento

Lancio del seeder, con migrazione da zero

```bash
php artisan migrate:fresh --seed
```

# Scelte progettuali

### Angular

Ho scritto tutti i template inline nei file typescript, mantenendo un'applicazione
più compatta.

### CSS

Ho gestito l'aspetto puramente con classi bootstrap, principalmente usando
le card.
Le uniche regole css dichiarate sono per gestire alcune immagini, e il colore di sfondo.

### Laravel

Ho lasciato alcuni file nativi alla generazione dell'applicazione per non creare
eventuali conflitti.
Ho voluto utilizzare le classi API resources per assicurarmi che ci fosse il giusto
contratto api fra frontend e backend
