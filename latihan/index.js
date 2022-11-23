/* 
STORE nama WITH STRING
STORE tinggi WITH ANY NUMBER
STORE umur WITH ANY NUMBER
STORE uang WITH ANY NUMBER
STORE selisihTinggi WITH CALCULATE 166 - tinggi
STORE selisihUang WITH  CALCULATE 5000 - uang

IF umur GREATER THAN 18 THEN
    IF uang LOWER THAN 50000 THEN 
        IF tinggi LOWER THAN 166 THEN
            DISPLAY "Tinggi kamu kurang [selisihTinggi]cm dan kamu kurang uang sebanyak [selisihUang] untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Kuda Putar!"
        ELSE IF TINGGI GREATER THAN EQUAL 166 THEN
             DISPLAY "Kamu kurang uang sebanyak [selisihUang] untuk menaiki wahana favorit, Tapi tenang, kamu dapat menaiki wahana Lontang-Lanting!"
    ELSE IF uang GREATHER THAN EQUAL 50000 THEN 
            IF tinggi LOWER THAN 166 THEN
                DISPLAY "Tinggi kamu kurang [selisihTinggi] cm untuk menaiki wahana favorit! Tapi tenang, kamu dapat menaiki wahana Trilili!"
             ELSE IF TINGGI GREATER THAN EQUAL 166 THEN
                DISPLAY Yeay kamu dapat menaiki wahana favorit! Yaitu Kocar-Kacir!
ELSE 
    DISPLAY Maaf [nama], kamu tidak dapat memasuki kawasan ini!
END IF

*/

