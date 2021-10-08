# WYMAGANIA

Zbiór zadań

useRef useState useEffect

# 1 Formularz bez użycia stanu - 45min

1. Stwórz generyczny komponent inputu tekstowego, który obsługuje invalid state
2. Formularz nie powinien używać stanu do przechowywania danych
3. Formularz powinien obsługiwać pola: username, email, password, re-password
4. username powinien być dłuższy niż 4 znaki, mail powinien być poprawny, hasło dłuższe niż 6 znaków, re-repassword takie samo jak password
5. Formularz powinien zawierać walidację, która wykonuje się w momencie utraty focusu na inpucie

useRef useState useCallback

# 2 Hook do updatowania dowolnego obiektu - 45min

1. Hook powinien przyjmowac dowolny obiekt - initial value
2. Hook powinien umożliwić zmianę pojedyńczego pola na tym obiekcie,
3. Hook powinien przyjmować jako drugi parametr listę pól, których zmiana wywołuje rerendeer, inne pola nie powinny wywoływać rerenderów
4. Setter powinien posiadać stałą referencję

useState, useRef, useCallback

# 3 Stwórz custom hooka, który updatuje stan dopiero po x ms od ostatniego wykorzystania settera - debounce - 30min

1. Hook powinien zwracać stan, ostatnio ustawioną wartość, oraz setter
2. Hook powinien mieć konfiguralny czas po którym wykona zmianę stanu
3. Setter powinien posiadać stałą referencję
4. Hook powinien umożliwić wykonanie callbacka w momencie ustawienia nowego stanu

# 4 Filter z useMemo

useRef useImperativeHandle useState forwardRef
useContext useMemo(jsx) useState

# 5 Stwórz komponent, który możemy sterować imperatywnie, z minimalnym wykorzystaniem propsów.

1. Komponent powinien przyjmować tylko jeden props: ref
2. Komponent powinien wyświetlać napis, który mozemy ustawić poprzez ref
3. Komponent powinien umożliwić zmianę koloru napisu ref
