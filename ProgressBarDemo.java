package Santhosh;

import java.awt.Color;
import java.awt.Font;

import javax.swing.JFrame;
import javax.swing.JProgressBar;

public class ProgressBarDemo {
	  
	JFrame frame = new JFrame();;
	JProgressBar bar = new JProgressBar(0,100);
	
	 ProgressBarDemo() 
	 { 
	       bar.setValue(0);
	       bar.setBounds(0,0,420,50);
	       bar.setStringPainted(true);
	       bar.setFont(new Font("MV BOLI",Font.BOLD,25));
	       bar.setBackground(Color.black);
	       bar.setForeground(new Color(0X00FF00));
	       bar.setVisible(true);
	       
	       
		    
		   
		    
			frame.setVisible(true);
			 frame.add(bar);
			frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
			frame.setSize(420,420);
			frame.setLayout(null);
			fill();

	 }
	 
	 public void fill() 
	 {
		 bar.setValue(0);
		 int counter=0;
		 while(counter<=100)
		 {
			 bar.setValue(counter);
			try {
				Thread.sleep(50);
			} catch (InterruptedException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			counter +=1;
		 }
		 bar.setString("Done!");
	 }

}
