[![Build Status](https://travis-ci.org/ThisNameWasTaken/LFA.svg?branch=T2%2FGrammar%2FJS)](https://travis-ci.org/ThisNameWasTaken/LFA)
# LFA
Limbaje formale si automate 

#### Tema 2 
_5\. Pentru o gramatica regulata, sa se genereze toate cuvintele avand o lungime maxima data._

__Input:__ O gramatica regulata oarecare si un numar natural, n. <br/>
__Output:__ Lista cuvintelor de dimensiune n recunoscute de gramatica.

Exemplu:

__G:__ <br/>
&nbsp;N = {S, A} <br/>
&nbsp;Σ = {a, b, c} <br/>
&nbsp;S → aS <br/>
&nbsp;S → bA <br/>
&nbsp;A → ε <br/>
&nbsp;A → cA <br/>

__n = 2__ → ["ab", "bc"] <br/>
__n = 3__ → ["aab", "abc", "bcc"] <br/>
__n = 4__ → ["aaab", "aabc", "abcc", "bccc"] <br/>

# 
Verificati daca aveti instalat [NodeJS](https://nodejs.org/en/) executand intr-un terminal ```node -v```. <br/>
Instalati toate modulele executand ```npm install```. <br/>
Rulati testele executand ```npm test```.
