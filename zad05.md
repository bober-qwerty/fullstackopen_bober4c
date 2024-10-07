sequenceDiagram
    participant User as Użytkownik
    participant Browser as Przeglądarka
    participant Server as Serwer

    Użytkownik->>Przeglądarka: Wprowadza adres URL `https://studies.cs.helsinki.fi/exampleapp/spa`
    Przeglądarka->>Serwer: Żądanie HTTP GET (HTML plik)
    Serwer-->>Przeglądarka: Odpowiedź HTML (struktura SPA)
    Przeglądarka->>Przeglądarka: Wczytuje plik JavaScript (spa.js)
    Przeglądarka->>Serwer: Żądanie HTTP GET (spa.js)
    Serwer-->>Przeglądarka: Odpowiedź spa.js (kod aplikacji SPA)
    Przeglądarka->>Przeglądarka: Wykonuje kod JavaScript, renderuje widok
    Przeglądarka->>Serwer: Żądanie HTTP GET (dane notatek - /data.json)
    Serwer-->>Przeglądarka: Odpowiedź (lista notatek w formacie JSON)
    Przeglądarka->>Przeglądarka: Aktualizacja widoku z notatkami
