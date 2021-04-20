parsenInt(); //uzme bilo koji tip inputa-sta god da joj se prosledi kao argument- najcesce string- funkcija ce od tog inputa probati da napravi integer, neki broj-ceo broj, ako ne uspe, vrati ce nazad. Funckija moze da primi jos jedan argument - radix, koji govori funkciji koju vrstu broja da ocekuje - decimal, hex...

parseInt("123");

console.log(parseInt(0)); //daje nulu
console.log(parseInt("123")); //number

console.log(parseInt("123.12.3")); //vratice 123, prvi put kad naidje na karakter koji ne zna kako da evaluira, tu staje.

console.log(parseInt("abc123123")); //ovo ce biti NaN, jer  krece od pocetka stringa i ako ne prepozna broj na pocetku, nece nastaviti dalje.

console.log(parseInt(2e2)); //vratice 200, ako pokusamo '2e2' da prosledimo kao string, vratice nam samo broj 2!!

console.log(parseInt("12f", 16)); //prepoznaje pocetak hao heksadecimalni, 16 je radix za to, ako stavimo 2 umesto 16, to je znak da je binarni sistem u pitanju. 8 je oktalni brojni sistem... Ako ne prosledimo radix, on defaultno uzima broj 10- dekadni zapis.

//ako ne znamo sta funckija radi, guglamo njeno ime i mdn(developer.mozzila.org)

console.log(parseInt("0x", 10)); //ovo je exception, za 0x moramo reci da je to radix 10, inace ce nam vratiti NaN!! Najbezbednije da uvek napisemo radix, da bismo bili sigurni da necemo naici na neku gresku.

/////////////////////////////////////////

console.log(parseFloat()); //vraca i decimalnu vrednost za razliku od prvog, i uzima samo jedan parametar jer decimalni zapis mozemo imati samo u dekadnom brojnom sistemu.

console.log(parseFloat(123.3)); //prva pozicija treba da bude broj, isto kao i za prethodni.

console.log(parseFloat("2e2")); //parsefloat zna iz stringa da procita eksponent i vraca ga, za razliku od parseInta, koji ga cita samo kad nije string.

/////////////////////////////////////

console.log(isNaN()); // da li je neki input validan broj koji se dalje moze koristiti unutar aritmetickih operacija. Moze se takodje koristiti da se proveri da li su parseInt ili parseFloat ili bilo koja aritmeticka operacija uspesne... Vraca true(za sve sto nije broj vraca true) ili false-ako je broj!

console.log(isNaN(Infinity)); // false je i znaci da mozemo koristiti, ali ne bi trebalo da koristimo infinity

//NaN === NaN  to je false!! Ne postoji vrednost koju mozemo da izjednacimo sa NaN, zato mozemo samo pomocu ove funkcije da detektujemo da li je nesto NaN!!

///////////////////////////////
console.log(isFinite()); // ako mu zadamo neki NaN ili infinity, on ce dati false, a dace true za broj (sto znaci false je za sve ostalo)

console.log(isFinite("123.25")); // ali vraca true ukoliko je u stringu neki validan broj, i za decimalne brojeve u stingu vraca true..

///////////////////////////////

console.log; // je nista drugo nego funkcija koju uzima sve sto joj se prosledilo kao argument, odvojen zarezom, ispisace ga unutar nekog output device-a! console je objekat a log je metoda console objekta (radicemo to kasnije).
