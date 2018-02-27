#include <iostream>
#include "Automat.h"

using namespace std;

int main() {
	const char stareInitiala = 's';

	const char stariStr[] = "r";
	const vector<char> stariFinale(stariStr, stariStr + (sizeof(stariStr) / sizeof(stariStr[0]) - 1)); // -1 pt caracterul null

	const map<char, map<char, char>> tranzitii = {
		{ 's', {
			{ 'a', 'p' },
			{ 'b', 's' }
		} },
		{ 'p',{
			{ 'a', 'p' },
			{ 'b', 'q' }
		} },
		{ 'q',{
			{ 'a', 'r' },
			{ 'b', 's' }
		} },
		{ 'r',{
			{ 'a', 'r' },
			{ 'b', 'r' }
		} }
	};

	const char pasiStr[] = "ababa";
	const vector<char> pasi(pasiStr, pasiStr + (sizeof(pasiStr) / sizeof(pasiStr[0]) - 1)); // -1 pt caracterul null

	Automat<char> automat(stareInitiala, stariFinale, tranzitii);
	if (automat.verificaPasi(pasi)) {
		cout << "Ajunge intr-o stare finala." << endl;
	} else {
		cout << "Nu ajunge intr-o stare finala." << endl;
	}

	system("pause");
	return 0;
}