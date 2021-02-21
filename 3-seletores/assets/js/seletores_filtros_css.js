//como tem 2 listas, se deixar só last, vai pegar o ultimo da ultima lista. Se colocar o child
//vai pegar o ultimo de todas as listas
//o mesmo acontece para o FIRST
$('.cars_list li:last-child').css('text-decoration', 'underline')


//alternar (even) para todas as listas
//o mesmo funciona para o ODD
$('.cars_list li:nth-child(even)').css('background-color', "#ccc")

//selecionando elementro em posicao especifica
$('.cars_list li:nth-child(1)').css('background-color', "#ccc")