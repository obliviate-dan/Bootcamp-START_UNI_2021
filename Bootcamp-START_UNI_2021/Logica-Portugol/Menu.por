programa
{
	
	funcao inicio()
	{
		escreva(" 1 - Netflix | 2 - Prime Video | 3 - Disney+ | 4 - Sair")
		inteiro menu=0
		escreva ("\n" + "Qual Stream deseja abrir?: ")
		leia (menu)
		
		escolha (menu)
		{
			caso 1:
			escreva ("Abrindo Netflix!")
			pare

			caso 2:
			escreva ("Abrindo Prime Video!")
			pare

			caso 3:
			escreva ("Abrindo Disney+!")
			pare

			caso 4:
			escreva ("Encerrando")
			pare

			caso contrario:
			escreva ("Você deve escolher entre as opções acima.")
		} 
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 497; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */