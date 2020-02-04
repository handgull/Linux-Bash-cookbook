# Navigare nel File System

## Il tuo primo comando

La linea di comando è un interfaccia testuale al tuo computer. È un programma che riceve comandi, che vengono passati al [OS](https://it.wikipedia.org/wiki/Sistema_operativo).

Dalla command line, si può navigare tra i files e le cartelle del computer, come si può fare con un esplora risorse grafico, la differenza è che la command line è **text-based**.

Il vantaggio che si ha utilizzando il terminale è la sua potenza. Si possono far girare eseguibili e scrivere script per **automatizzare** azioni ripetute spesso, combinando semplici comandi è possibile risolvere problemi complessi.

### ls
``` sh
$ ls # Comando per vedere la lista dei files presenti nella cartella attuale
> file1 file2 directory1
```
:::tip
La **shell prompt** appare quando il terminale è pronto a ricevere gli input, può aspetto differente da terminale a terminale, ed è personalizzabile.
:::

## Filesystem

Un filesystem organizza i files e le directories(cartelle) in una **struttura ad albero**:

![git-diagrams-01](./assets/git-diagrams-01.png)

1. La prima cartella del FS(filesystem) è la **root directory**, ed è la cartella da cui derivano tutte le cartelle e file del FS.

2. Ogni cartella padre può **contenere** più files/directory. Ad esempio nell'immagine sopra `blog/` è padre di `2014/`, `2015/` e `hardware.txt`

### pwd
``` sh
$ pwd # Comando per vedere il path in cui ci si trova, ovvero la cartella ed i suo percorso
> /home/handgull
```
:::tip
**pwd** = Print working directory. Nell'esempio sopra la Working directory è `handgull`<br>
:::
`ls` e `pwd` sono quindi utili comandi del terminale per capire "dove ci si trova"

### cd
``` sh
$ cd <path> # Comando per spostarsi all'interno della cartella
$ cd .. # Comando per spostarsi nella cartella padre
```
:::tip
**cd** = Change direcory. In altre parole con `cd` possiamo cambiare la Working directory.
:::
:::tip
Negli esempi sopra è stato passato un **parametro** al comando cd
:::
### mkdir & touch
``` sh
$ mkdir <name> # Crea una cartella all'interno della Working directory
$ touch <name> # Crea un file vuoto nella Working directory
```
