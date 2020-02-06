# Environment

We can configure the environment to support the commands and programs we create. This enables us to customize greetings and command aliases, and create variables to share across commands and programs.

Ogni volta che si apre un nuovo terminale viene creata una nuova sessione.<br>
La sessione carica le impostazioni e le preferenze come ad esempio da un file `~/.bashrc`, da un file `~/.bash_profile` ed anche da altre fonti riceviamo, tra le altre cose, degli alias o anche un nostro prompt dei comandi personalizzato, ecc...<br>

L'envinronment può essere configurato in tutto per tutto, permettendoci ad esempio di aggiungere al `PATH` dei nuovi programmi di terze parti, alias o variabili.
> Gli [alias](https://alvinalexander.com/blog/post/linux-unix/create-aliases) non sono altro che metodi alternativi per chiamare un comando.<br>
> ad esempio con `alias search=grep` d'ora in poi grep si chiamerà anche search! (all'interno della sessione a meno che non sia specificato nel file sopra citato)

## nano & .bash_profile
nano è un **editor** di testi completamente text based e minimale, non offre molte funzionalità, ma è comodo per scrivere linee di **configurazione** in giro per il File System.
```sh
$ nano ~/.bash_profile # apre il file contenente alcune configurazioni di bash
$ source ~/.bash_profile # Carica le impostazioni contenute nel .bash_profile senza dover chiudere e riaprire il terminale
```
> `~` Identifica il path assoluto per accedere alla home dell'utente della sessione bash.
:::warning
Con `su` si può accedere ad altri utenti dentro la sessione bash, **non è la stessa cosa di cambiare utente** quando si fa il reboot del pc, si parla appunto di un envinronment fine a se stesso, ovvero all'interno del terminale.
:::

![bash-screenshots-05](../assets/bash-screenshots-05.png)
![bash-screenshots-06](../assets/bash-screenshots-06.png)
WIP