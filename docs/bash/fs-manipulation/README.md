# Manipolazione del File System

## $ cp e $ mv
```sh{4}
cp frida.txt lincoln.txt # copia il file frida.txt in un nuovo file lincoln.txt
cp file1 ... <directory> # copia il file/i files specificati nella directory specificata
cp m*.txt scifi/ # copia tutti i file txt che iniziano per m nella cartella scify
# NOTA: vedi wildcards
```
> Ogni esempio visto sopra può essere fatto anche usando `mv`, naturalmente con effetti leggermente diversi:<br>
>`cp` effettua la copia dei file, `mv` li sposta. (ctrl + c vs ctrl + x).<br>
> Ad esempio per rinominare un file `mv file1 file2`

## Wildcards
Oltre ad usare nomi di files possiamo usare dei caratteri speciali, come `*` per **selezionare gruppi di files**. Questi caratteri speciali sono chiamati [wildcards](https://www.tecmint.com/use-wildcards-to-match-filenames-in-linux/). L'* ad esempio seleziona tutti i files nella working directory.

## $ rm
Per eliminare files e cartelle in maniera __*DEFINITIVA*__
```sh{4}
rm file
rm -r directory/ # -r sta per recursive e serve per eliminare la directory ed il suo contenuto, ricorsivamente.
rm directory/* # Elimina ogni file dentro la directory
```
