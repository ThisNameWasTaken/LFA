#include "_Automat.h"

template <class T>
Automat<T>::Automat(const T& stareInitiala, const vector<T>& stariFinale, const map<T, map<T, T>>& tranzitii) {
	this->stareInitiala = stareInitiala;
	this->stariFinale = stariFinale;
	this->tranzitii = tranzitii;
}

template <class T>
Automat<T>::~Automat() {

}

template<class T>
bool Automat<T>::verificaPasi(const vector<T>& pasi)
{
	// incepem de la starea initiala
	T* stareCurenta = &this->stareInitiala;

	for (const T& pas : pasi) {
		// trecem la urmatoarea stare
		stareCurenta = &this->tranzitii[*stareCurenta][pas];
		// am ajuns intr-o stare nedefinita
		if (!*stareCurenta) {
			return false;
		}
	}

	// verificam daca starea in care am ajuns se regaseste printre starile finale
	for (const T& stareFinala : this->stariFinale) {
		if (*stareCurenta == stareFinala) {
			return true;
		}
	}

	return false;
}
