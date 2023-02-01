
package md;
import java.util.*;
import java.util.Random;
public class Anagram  {
    static String play1;
    static String play2;
    public static void main(String[] args) {
    	int i=0,count=0;
    	
    	String winner=null,temp;
    	int x,m;
    	double y;
    	Random rand= new Random();
    	m=rand.nextInt()%2;
    	System.out.print("\t\t\t\t\t\t\t\t\t\t----");
    	char alpha[]= {'T','I','C','-','T','A','C','-','T','O','E'};
    	for(x=0;x<=10;++x)
    	{
    		System.out.print(alpha[x]);
    		for(y=0;y<=8888888;y++)
    		{
    		}
    	}
    	System.out.println("----\n");
    	System.out.println("\nINSTRUCTIONS::");
    	Instruct in=new Instruct();
    	in.instruction();
    	while(true) {
    		char[][] board = new char[3][3];
    		boared b= new boared();
    		Scanner sc=new Scanner(System.in);
    		System.out.println("\n\n1.Ente 1 if you want to PLAY\n2.Enter 2 if you want to QUIT");
    		System.out.println("Enter your choice::");
    		int ch=sc.nextInt();
    		switch(ch) {
    		case 1:
    	System.out.println("\nEnter the name of any two players\n\n\n");
    	System.out.println("Name of first player is\n");
    	System.out.println("Name::");
    	Scanner s=new Scanner(System.in);
    	play1=s.nextLine();
    	System.out.println("\n\n\nName of second player is\n");
    	System.out.println("Name::");
    	play2=s.nextLine();
    	String player1=play1;
    	String player2=play2;
    	playe1 p=new playe1();
//    	p.player_1(board,play1,play2,count);
    	playe2 p2=new playe2();
//    	p2.player_2(board,play1,play2,count);
    	if(m==0)
    	{
    		System.out.println("\nCongratulation "+play1+" you have won the toss!!\n");
    		winner=player1;
    		p.player_1(board,play1,play2,count);
    	}
    	if(m==1)
    	{
    		System.out.println("\nCongratulation "+play2+" you have won the toss!!\n");
    		winner=player2;
    		p2.player_2(board,play1,play2,count);
    	}
    	while(i<8&&((board[0][0]!='X')||(board[1][1]!='X')||(board[2][2]!='X'))&&((board[0][2]!='X')||(board[1][1]!='X')||(board[2][0]!='X'))&&((board[0][1]!='X')
    			||(board[0][2]!='X')||(board[0][0]!='X'))&&((board[1][0]!='X')||(board[1][1]!='X')||(board[1][2]!='X'))
    			&&((board[2][0]!='X')||(board[2][1]!='X')||(board[2][2]!='X'))&&((board[0][0]!='O')||(board[1][1]!='O')||(board[2][2]!='O'))
    			&&((board[0][2]!='O')||(board[1][1]!='O')||(board[2][0]!='O'))&&((board[0][1]!='O')||(board[0][2]!='O')||(board[0][0]!='O'))&&
    			((board[1][0]!='O')||(board[1][1]!='O')||(board[1][2]!='O'))&&((board[2][0]!='O')||(board[2][1]!='O')||(board[2][2]!='O'))
    			&&((board[0][0]!='O')||(board[1][0]!='O')||(board[2][0]!='O'))&&((board[2][0]!='X')||(board[2][1]!='X')||(board[2][2]!='X'))
    			&&((board[0][0]!='X')||(board[1][0]!='X')||(board[2][0]!='X'))	&&((board[0][1]!='O')||(board[1][1]!='O')||(board[2][1]!='O'))&&
    			((board[0][1]!='X')||(board[1][1]!='X')||(board[2][1]!='X')))
    			{
    			if(winner==player1)
    			{
    				p2.player_2(board,play1,play2,count);
    			}
    			if(winner==player2)
    			{
    				p.player_1(board,play1,play2,count);
    			}
    				temp=player1;
    				player1=player2;
    				player2=temp;
    			i++;
    			
    			}	
    	if(i==8 && count==0)
		{
			System.out.print("\nMatch has been drawn!!");
			System.out.print("\nBETTER luck next time");
		}
    		break;
    		case 2:
    			return;
    	}
    		
    }
    }
   
}
class playe2{
	 void player_2(char [][]board,String play1,String play2,int count)
	    {
	    	int choice;
	    		System.out.print("\n\n"+play2+" enter the position where you want to print O::");
	    		Scanner sc=new Scanner(System.in);
	    		playe1 p1=new playe1();
	    		choice=sc.nextInt();
	    		boared b= new boared();
	    	switch(choice)
	    	{
	    	 	case 1:
	    	 		if(board[0][0]=='X'||board[0][0]=='O')
	    	 		{
	    	 			System.out.print("wrong choice!!");
	    	 			p1.player_1(board,play1,play2,count);
	    			 }
	    	 		board[0][0]='O';
	    	 		
	    	 		b.boar(board);
	    	 		
	    	 		break;
	    	 	case 2:
	    	 		if(board[0][1]=='X'||board[0][1]=='O')
	    	 		{
	    	 			System.out.print("wrong choice!!");
	    	 			p1.player_1(board,play1,play2,count);
	    			 }
	    	 		board[0][1]='O';
	    	 		b.boar(board);
	    	 		
	    	 		break;	
	    	 	case 3:
	    	 		if(board[0][2]=='X'||board[0][2]=='O')
	    	 		{
	    	 			System.out.print("wrong choice!!");
	    	 			p1.player_1(board,play1,play2,count);
	    			 }
	    	 		board[0][2]='O';
	    	 		b.boar(board);
	    	 		
	    	 		break;
	    	 	case 4:
	    	 		if(board[1][0]=='X'||board[1][0]=='O')
	    	 		{
	    	 			System.out.print("wrong choice!!");
	    	 			p1.player_1(board,play1,play2,count);
	    			 }
	    	 		board[1][0]='O';
	    	 		b.boar(board);
	    	 		
	    	 		break;
	    		case 5:
	    	 		if(board[1][1]=='X'||board[1][1]=='O')
	    	 		{
	    	 			System.out.print("wrong choice!!");
	    	 			p1.player_1(board,play1,play2,count);
	    			 }
	    	 		board[1][1]='O';
	    	 		b.boar(board);
	    	 		
	    	 		break;
	    	 	case 6:
	    	 		if(board[1][2]=='X'||board[1][2]=='O')
	    	 		{
	    	 			System.out.print("wrong choice!!");
	    	 			p1.player_1(board,play1,play2,count);
	    			 }
	    	 		board[1][2]='O';
	    	 		b.boar(board);
	    	 		
	    	 		break;	
	    	 	case 7:
	    	 		if(board[2][0]=='X'||board[2][0]=='O')
	    	 		{
	    	 			System.out.print("wrong choice!!");
	    	 			p1.player_1(board,play1,play2,count);
	    			 }
	    	 		board[2][0]='O';
	    	 		b.boar(board);
	    	 		
	    	 		break;
	    	 	case 8:
	    	 		if(board[2][1]=='X'||board[2][1]=='O')
	    	 		{
	    	 			System.out.print("wrong choice!!");
	    	 			p1.player_1(board,play1,play2,count);
	    			 }
	    	 		board[2][1]='O';
	    	 		b.boar(board);
	    	 		
	    	 		break;
	    		case 9:
	    	 		if(board[2][2]=='X'||board[2][2]=='O')
	    	 		{
	    	 			System.out.print("wrong choice!!");
	    	 			p1.player_1(board,play1,play2,count);
	    			 }
	    	 		board[2][2]='O';
	    	 		b.boar(board);
	    	 		
	    	 		break;		
	    	
	    	}
	    	if((board[0][0]=='O'&&board[1][1]=='O'&&board[2][2]=='O')||(board[0][2]=='O'&&board[1][1]=='O'&&board[2][0]=='O')
	    	||(board[0][0]=='O'&&board[0][1]=='O'&&board[0][2]=='O')||(board[1][0]=='O'&&board[1][1]=='O'&&board[1][2]=='O')
	    	||(board[2][0]=='O'&&board[2][1]=='O'&&board[2][2]=='O')||(board[0][0]=='O'&&board[1][0]=='O'&&board[2][0]=='O')
	    	||(board[0][1]=='O'&&board[1][1]=='O'&&board[2][1]=='O')||(board[0][2]=='O'&&board[1][2]=='O'&&board[2][2]=='O'))
	    	{
	    		System.out.print("\nHURRAY ");
//	    		system("COLOR F4");
	    		{
	    		System.out.print(play2);
	    		}
	    		System.out.print(" has won the match!!");
	    		count++;
	    	}

	    }
}
class playe1{
	 void player_1(char [][]board,String play1,String play2,int count)
	    {
	    	int choice;
	    	playe2 p2=new playe2();
	    	boared b=new boared();
	    		System.out.println("\n\n"+play1+ " enter the position where you want to print X::");
	    	Scanner sc=new Scanner(System.in);
	    		choice=sc.nextInt();
	    	switch(choice)
	    	{
	    	 	case 1:
	    	 		if(board[0][0]=='X'||board[0][0]=='O')
	    	 		{
	    	 			System.out.println("wrong choice!!");
	    	 			p2.player_2(board,play1,play2,count);
	    			 }
	    	 		board[0][0]='X';
	    			b.boar(board);
	    	 		break;
	    	 	case 2:
	    	 		if(board[0][1]=='X'||board[0][1]=='O')
	    	 		{
	    	 			System.out.print("wrong choice!!");
	    	 			p2.player_2(board,play1,play2,count);
	    			 }
	    	 		board[0][1]='X';
	    	 		b.boar(board);
	    	 		
	    	 		break;	
	    	 	case 3:
	    	 		if(board[0][2]=='X'||board[0][2]=='O')
	    	 		{
	    	 			System.out.println("wrong choice!!");
	    	 			p2.player_2(board,play1,play2,count);
	    			 }
	    	 		board[0][2]='X';
	    	 		b.boar(board);
	    	 		
	    	 		break;
	    	 	case 4:
	    	 		if(board[1][0]=='X'||board[1][0]=='O')
	    	 		{
	    	 			System.out.println("wrong choice!!");
	    	 			p2.player_2(board,play1,play2,count);
	    			 }
	    	 		board[1][0]='X';
	    	 		b.boar(board);
	    	 		
	    	 		break;
	    		case 5:
	    	 		if(board[1][1]=='X'||board[1][1]=='O')
	    	 		{
	    	 			System.out.println("wrong choice!!");
	    	 			p2.player_2(board,play1,play2,count);
	    			 }
	    	 		board[1][1]='X';
	    	 		b.boar(board);
	    	 		
	    	 		break;
	    	 	case 6:
	    	 		if(board[1][2]=='X'||board[1][2]=='O')
	    	 		{
	    	 			System.out.println("wrong choice!!");
	    	 			p2.player_2(board,play1,play2,count);
	    			 }
	    	 		board[1][2]='X';
	    	 		b.boar(board);
	    	 		
	    	 		break;	
	    	 	case 7:
	    	 		if(board[2][0]=='X'||board[2][0]=='O')
	    	 		{
	    	 			System.out.println("wrong choice!!");
	    	 			p2.player_2(board,play1,play2,count);
	    			 }
	    	 		board[2][0]='X';
	    	 		b.boar(board);
	    	 		
	    	 		break;
	    	 	case 8:
	    	 		if(board[2][1]=='X'||board[2][1]=='O')
	    	 		{
	    	 			System.out.println("wrong choice!!");
	    	 			p2.player_2(board,play1,play2,count);
	    			 }
	    	 		board[2][1]='X';
	    	 		b.boar(board);
	    	 		
	    	 		break;
	    		case 9:
	    	 		if(board[2][2]=='X'||board[2][2]=='O')
	    	 		{
	    	 			System.out.println("wrong choice!!");
	    	 			p2.player_2(board,play1,play2,count);
	    			 }
	    	 		board[2][2]='X';
	    	 		b.boar(board);
	    	 		
	    	 		break;		
	    	
	    	}
	    	if((board[0][0]=='X'&&board[1][1]=='X'&&board[2][2]=='X')||(board[0][2]=='X'&&board[1][1]=='X'&&board[2][0]=='X')
	    	||(board[0][0]=='X'&&board[0][1]=='X'&&board[0][2]=='X')||(board[1][0]=='X'&&board[1][1]=='X'&&board[1][2]=='X')
	    	||(board[2][0]=='X'&&board[2][1]=='X'&&board[2][2]=='X')||(board[0][0]=='X'&&board[1][0]=='X'&&board[2][0]=='X')
	    	||(board[0][1]=='X'&&board[1][1]=='X'&&board[2][1]=='X')||(board[0][2]=='X'&&board[1][2]=='X'&&board[2][2]=='X'))
	    	{
	    			System.out.println("\nHURRAY ");
	    		{
	    		System.out.print(play1);
	    		}
	    		System.out.print(" has won the match!!");
	    		count++;
	    	}
	    }
}
class boared{
	 void boar(char [][]board)
	    {
	    	 System.out.print("\n\n");
		    	System.out.print("\t\t\t");
			 System.out.print(" ");
			 for(int i=0;i<13;i++) {
				 System.out.print((char)Byte.toUnsignedInt((byte)95));
				 }
			 System.out.print("\n");
				 System.out.println("\t\t\t|             |");
				 System.out.print("\t\t\t|  ");
				 System.out.println(board[0][0]+" | " + board[0][1]+" | "+ board[0][2]+"  |");
			 System.out.println("\t\t\t| ----------- |");
			 System.out.print("\t\t\t|  ");
			 System.out.println(board[1][0]+" | " + board[1][1]+" | "+ board[1][2]+"  |");
			 System.out.println("\t\t\t| ----------- |");
			 System.out.print("\t\t\t|  ");
			 System.out.println(board[2][0]+" | " + board[2][1]+" | "+ board[2][2]+"  |");
			 System.out.print("\t\t\t|");
			 for(int i=0;i<13;i++) {
				 System.out.print((char)Byte.toUnsignedInt((byte)95));
				 }
			 System.out.print("|");
	    }
}
class  Instruct{
	 void instruction() {
    	 System.out.print("\n\n");
	    	System.out.print("\t\t\t");
		 System.out.print(" ");
		 for(int i=0;i<13;i++) {
			 System.out.print((char)Byte.toUnsignedInt((byte)95));
			 }
		 System.out.print("\n");
			 System.out.println("\t\t\t|             |");
		 System.out.println("\t\t\t|  1 | 2 | 3  |");
		 System.out.println("\t\t\t| ----------- |");
		 System.out.println("\t\t\t|  4 | 5 | 6  |");
		 System.out.println("\t\t\t| ----------- |");
		 System.out.println("\t\t\t|  7 | 8 | 9  |");
		 System.out.print("\t\t\t|");
		 for(int i=0;i<13;i++) {
			 System.out.print((char)Byte.toUnsignedInt((byte)95));
			 }
		 System.out.print("|");
    }
}
