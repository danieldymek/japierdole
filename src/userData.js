// user data
export const rows = [
  {
    imie: "Daniel",
    nazwisko: "Dymek",
    pesel: "6942012121212", // moze byc tez w formie number, nie musi byc string
    data_urodzenia: "23.03.1410", // tutaj musi byc zawsze string, bo nie ma innej konwersji
    photo: "ADRES JEST DYNAMICZNY",
  },
];

// user data columns
export const columns = [
  {id: "imie", label: "Imie"},
  {id: "nazwisko", label: "Nazwisko"},
  {
    id: "pesel",
    label: "Pesel",
  },
  {
    id: "data_urodzenia",
    label: "Data urodzenia",
  },
  {
    id: "photo",
    label: "Zdjęcie",
  },
];
