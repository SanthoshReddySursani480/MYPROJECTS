package Santhosh;

import java.awt.Dimension;
import java.awt.FlowLayout;
import java.awt.Font;

import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JPanel;
import javax.swing.JSlider;
import javax.swing.SwingConstants;
import javax.swing.event.ChangeEvent;
import javax.swing.event.ChangeListener;

public class SliderDemo implements ChangeListener{

	
	JFrame frame;
	JPanel panel;
	JLabel label;
	JSlider slider;
	
	
	SliderDemo()
	{  
		frame = new JFrame();
		panel = new JPanel();
		label = new JLabel();
		
		frame.setTitle("Temparature");
		
		slider = new JSlider(0,100,50);
		slider.setPreferredSize(new Dimension(400,200));
		slider.setPaintTicks(true);
		slider.setMinorTickSpacing(10);
		slider.setPaintTicks(true);
		slider.setMajorTickSpacing(25);
		slider.setPaintLabels(true);
		slider.setFont(new Font("MV BOLI",Font.BOLD,15));
		slider.setOrientation(SwingConstants.VERTICAL);
		slider.addChangeListener(this);
		
		
		
		label.setText("°C = "+slider.getValue());
		
		label.setFont(new Font("MV BOLI",Font.BOLD,25));
		
		
		
		
		
		panel.add(slider);
		panel.add(label);
		frame.add(panel);
		frame.setVisible(true);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		frame.setSize(420,420);
		frame.add(label);
		frame.setLayout(new FlowLayout());
		
		
		
		
		
	}
	
	
	@Override
	public void stateChanged(ChangeEvent e) {
		// TODO Auto-generated method stub
		label.setText("°C = "+slider.getValue());
	}

}
