// Sample data for the Sankey graph
const data = {
    nodes: [
            {
              "source": "Murray, Jamal_DEN",
              "year": 2022,
              "id": 0
            },
            {
              "source": "Bryant, Thomas_DEN",
              "year": 2022,
              "id": 1
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "year": 2022,
              "id": 2
            },
            {
              "source": "Reed, Davon_DEN",
              "year": 2022,
              "id": 3
            },
            {
              "source": "Brown, Bruce_DEN",
              "year": 2022,
              "id": 4
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "year": 2022,
              "id": 5
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "year": 2022,
              "id": 6
            },
            {
              "source": "Hyland, Bones_DEN",
              "year": 2022,
              "id": 7
            },
            {
              "source": "Braun, Christian_DEN",
              "year": 2022,
              "id": 8
            },
            {
              "source": "Watson, Peyton_DEN",
              "year": 2022,
              "id": 9
            },
            {
              "source": "White, Jack_DEN",
              "year": 2022,
              "id": 10
            },
            {
              "source": "Green, Jeff_DEN",
              "year": 2022,
              "id": 11
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "year": 2022,
              "id": 12
            },
            {
              "source": "Smith, Ish_DEN",
              "year": 2022,
              "id": 13
            },
            {
              "source": "Jackson, Reggie_DEN",
              "year": 2022,
              "id": 14
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "year": 2022,
              "id": 15
            },
            {
              "source": "Gordon, Aaron_DEN",
              "year": 2022,
              "id": 16
            },
            {
              "source": "Jokic, Nikola_DEN",
              "year": 2022,
              "id": 17
            }
    ],
    links: [
            {
              "source": "Murray, Jamal_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 4,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 57,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Hyland, Bones_DEN",
              "weight": 175,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 53,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 277,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 296,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 13,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 72,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Bryant, Thomas_DEN",
              "weight": 24,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Jokic, Nikola_DEN",
              "weight": 1273,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 398,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 322,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 41,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 9,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Jordan, DeAndre_DEN",
              "weight": 44,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Murray, Jamal_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 146,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Bryant, Thomas_DEN",
              "target": "White, Jack_DEN",
              "weight": 2,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Bryant, Thomas_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 2,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Bryant, Thomas_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 13,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Bryant, Thomas_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 1,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Bryant, Thomas_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 1,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Bryant, Thomas_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 38,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Bryant, Thomas_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 8,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Bryant, Thomas_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 36,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Bryant, Thomas_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 2,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Bryant, Thomas_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 10,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Bryant, Thomas_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 54,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Bryant, Thomas_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 47,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Bryant, Thomas_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 14,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "White, Jack_DEN",
              "weight": 5,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 13,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 56,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Hyland, Bones_DEN",
              "weight": 123,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 21,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 33,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 166,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 46,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Bryant, Thomas_DEN",
              "weight": 2,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 101,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Jokic, Nikola_DEN",
              "weight": 118,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 20,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 56,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 27,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 85,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Jordan, DeAndre_DEN",
              "weight": 10,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Cancar, Vlatko_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 23,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "White, Jack_DEN",
              "weight": 7,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 7,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 29,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "Hyland, Bones_DEN",
              "weight": 84,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 20,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 3,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 63,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 40,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 24,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "Jokic, Nikola_DEN",
              "weight": 26,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 9,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 14,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 101,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "Jordan, DeAndre_DEN",
              "weight": 13,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Reed, Davon_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 16,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "White, Jack_DEN",
              "weight": 3,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 14,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 148,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Hyland, Bones_DEN",
              "weight": 277,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 91,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 157,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 51,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 167,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Bryant, Thomas_DEN",
              "weight": 25,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 391,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Jokic, Nikola_DEN",
              "weight": 820,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 210,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 279,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 96,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 60,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Jordan, DeAndre_DEN",
              "weight": 97,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Brown, Bruce_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 216,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 1,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 12,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Hyland, Bones_DEN",
              "weight": 83,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 4,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 179,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 2,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 17,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Bryant, Thomas_DEN",
              "weight": 1,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 300,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Jokic, Nikola_DEN",
              "weight": 386,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 114,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 105,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 5,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 27,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Jordan, DeAndre_DEN",
              "weight": 28,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Porter Jr., Michael_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 32,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "White, Jack_DEN",
              "weight": 2,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 5,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 21,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Hyland, Bones_DEN",
              "weight": 57,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 8,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 101,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 15,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 30,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Bryant, Thomas_DEN",
              "weight": 3,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 81,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Jokic, Nikola_DEN",
              "weight": 12,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 8,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 21,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 16,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 55,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Jordan, DeAndre_DEN",
              "weight": 2,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Nnaji, Zeke_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 21,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Hyland, Bones_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 79,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Hyland, Bones_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 59,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Hyland, Bones_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 64,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Hyland, Bones_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 254,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Hyland, Bones_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 50,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Hyland, Bones_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 104,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Hyland, Bones_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 181,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Hyland, Bones_DEN",
              "target": "Jokic, Nikola_DEN",
              "weight": 222,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Hyland, Bones_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 53,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Hyland, Bones_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 77,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Hyland, Bones_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 14,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Hyland, Bones_DEN",
              "target": "Jordan, DeAndre_DEN",
              "weight": 81,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Hyland, Bones_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 141,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "White, Jack_DEN",
              "weight": 5,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 16,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Hyland, Bones_DEN",
              "weight": 123,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 27,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 25,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 227,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 21,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 60,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Bryant, Thomas_DEN",
              "weight": 12,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 97,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Jokic, Nikola_DEN",
              "weight": 88,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 43,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 27,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 49,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 103,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Jordan, DeAndre_DEN",
              "weight": 28,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Braun, Christian_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 60,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Watson, Peyton_DEN",
              "target": "White, Jack_DEN",
              "weight": 4,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Watson, Peyton_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 15,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Watson, Peyton_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 2,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Watson, Peyton_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 2,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Watson, Peyton_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 31,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Watson, Peyton_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 10,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Watson, Peyton_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 11,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Watson, Peyton_DEN",
              "target": "Bryant, Thomas_DEN",
              "weight": 2,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Watson, Peyton_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 5,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Watson, Peyton_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 3,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Watson, Peyton_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 33,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Watson, Peyton_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 33,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Watson, Peyton_DEN",
              "target": "Jordan, DeAndre_DEN",
              "weight": 7,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "White, Jack_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 1,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "White, Jack_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 7,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "White, Jack_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 4,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "White, Jack_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 4,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "White, Jack_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 9,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "White, Jack_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 3,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "White, Jack_DEN",
              "target": "Bryant, Thomas_DEN",
              "weight": 3,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "White, Jack_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 1,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "White, Jack_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 9,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "White, Jack_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 29,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 3,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 62,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Hyland, Bones_DEN",
              "weight": 171,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 17,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 51,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 184,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 14,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 12,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Bryant, Thomas_DEN",
              "weight": 7,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 170,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Jokic, Nikola_DEN",
              "weight": 73,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 22,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 74,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 51,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 59,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Green, Jeff_DEN",
              "target": "Jordan, DeAndre_DEN",
              "weight": 19,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "White, Jack_DEN",
              "weight": 1,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 7,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 26,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "Hyland, Bones_DEN",
              "weight": 128,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 4,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 33,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 125,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 21,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 19,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 69,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 22,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 27,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 21,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 39,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jordan, DeAndre_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 40,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "White, Jack_DEN",
              "weight": 19,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 31,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 69,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Hyland, Bones_DEN",
              "weight": 17,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 69,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 22,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 61,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 69,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 89,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Bryant, Thomas_DEN",
              "weight": 34,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 9,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Jokic, Nikola_DEN",
              "weight": 46,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 19,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 30,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 19,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Jordan, DeAndre_DEN",
              "weight": 38,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Smith, Ish_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 81,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "White, Jack_DEN",
              "weight": 4,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 18,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 42,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 12,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 7,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 92,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 20,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "Bryant, Thomas_DEN",
              "weight": 35,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 40,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "Jokic, Nikola_DEN",
              "weight": 37,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 37,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 30,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 10,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "Jordan, DeAndre_DEN",
              "weight": 17,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jackson, Reggie_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 42,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 35,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Hyland, Bones_DEN",
              "weight": 125,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 23,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 117,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 260,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 12,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 46,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Bryant, Thomas_DEN",
              "weight": 10,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 438,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Jokic, Nikola_DEN",
              "weight": 681,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 158,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 32,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 38,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Jordan, DeAndre_DEN",
              "weight": 25,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Caldwell-Pope, Kentavious_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 65,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 4,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 33,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Hyland, Bones_DEN",
              "weight": 50,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 17,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 147,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 183,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 5,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 21,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Bryant, Thomas_DEN",
              "weight": 4,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 438,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Jokic, Nikola_DEN",
              "weight": 617,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 180,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 30,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 22,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Jordan, DeAndre_DEN",
              "weight": 20,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Gordon, Aaron_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 31,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jokic, Nikola_DEN",
              "target": "Watson, Peyton_DEN",
              "weight": 1,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jokic, Nikola_DEN",
              "target": "Braun, Christian_DEN",
              "weight": 121,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jokic, Nikola_DEN",
              "target": "Hyland, Bones_DEN",
              "weight": 229,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jokic, Nikola_DEN",
              "target": "Nnaji, Zeke_DEN",
              "weight": 17,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jokic, Nikola_DEN",
              "target": "Porter Jr., Michael_DEN",
              "weight": 505,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jokic, Nikola_DEN",
              "target": "Brown, Bruce_DEN",
              "weight": 808,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jokic, Nikola_DEN",
              "target": "Reed, Davon_DEN",
              "weight": 39,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jokic, Nikola_DEN",
              "target": "Cancar, Vlatko_DEN",
              "weight": 152,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jokic, Nikola_DEN",
              "target": "Murray, Jamal_DEN",
              "weight": 1549,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jokic, Nikola_DEN",
              "target": "Gordon, Aaron_DEN",
              "weight": 800,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jokic, Nikola_DEN",
              "target": "Caldwell-Pope, Kentavious_DEN",
              "weight": 764,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jokic, Nikola_DEN",
              "target": "Jackson, Reggie_DEN",
              "weight": 45,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jokic, Nikola_DEN",
              "target": "Smith, Ish_DEN",
              "weight": 41,
              "year": 2022,
              "team": "DEN"
            },
            {
              "source": "Jokic, Nikola_DEN",
              "target": "Green, Jeff_DEN",
              "weight": 107,
              "year": 2022,
              "team": "DEN"
            }
    ]
  };
  
  // Set up the SVG container
  const margin = { top: 10, right: 100, bottom: 80, left: 50 };
  const width = 800 - margin.left - margin.right;
  const height = 800 - margin.top - margin.bottom;
  
//   const svg = d3.select("#plt")
//       .append("svg")
//       .attr("width", width + margin.left + margin.right)
//       .attr("height", height + margin.top + margin.bottom)
//       .append("g")
//       .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  





        const edges = data.links;

        // console.log('test');
        // console.log(data.links);
      
        // Create a new D3 force simulation
        const simulation = d3.forceSimulation()
          .force("link", d3.forceLink().id(d => d.id))
          .force("charge", d3.forceManyBody().strength(-100))
          .force("center", d3.forceCenter(window.innerWidth / 2, window.innerHeight / 2));
      
        const svg = d3.select("#plt")
          .append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
    
        const link = svg.selectAll(".link")
          .data(edges)
          .enter().append("line")
          .attr("class", "link")
          .style("stroke", "#999")
          .style("stroke-width", d => Math.sqrt(d.weight));
      
        const nodeSet = new Set(edges.flatMap(e => [e.source, e.target]));
        const nodes = Array.from(nodeSet, id => ({ id }));
      
        const node = svg.selectAll(".node")
          .data(nodes)
          .enter().append("circle")
          .attr("class", "node")
          .attr("r", 8)
          .style("fill", "#FF4500");
      
        simulation.nodes(nodes)
          .on("tick", () => {
            link
              .attr("x1", d => d.source.x)
              .attr("y1", d => d.source.y)
              .attr("x2", d => d.target.x)
              .attr("y2", d => d.target.y);
      
            node
              .attr("cx", d => d.x)
              .attr("cy", d => d.y);
          });
      
        simulation.force("link")
          .links(edges);
