#pragma once
#include <vector>
#include <map>

using namespace std;

template <class T>
class Automat
{
public:
	Automat(const T& stareInitiala, const vector<T>& stariFinale, const map<T, map<T, T>>& tranzitii);
	~Automat();
	
	/**
	 * Verifica daca o secventa de pasi duce intr-o stare finala
	 * 
	 * @param pasi - multimea `w`, ex: https://drive.google.com/drive/u/0/folders/1PLBPT1NMYYbEeNEVWFJTtlbR6-G6gHd-
	 */
	bool verificaPasi(const vector<T>& pasi);

private:
	// as putea folosi si aici referinte dar am ales sa nu o fac pentru cazul in care
	// as vrea sa mai adaug metode care modifica valorile proprietatilor clasei.

	T stareInitiala;
	vector<T> stariFinale;
	map<T, map<T, T>> tranzitii;
};