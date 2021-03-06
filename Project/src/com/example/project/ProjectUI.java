package com.example.project;

import javax.servlet.annotation.WebServlet;
import com.example.project.JobApplication;
import com.example.project.MyButtonListener;
import com.vaadin.annotations.Theme;
import com.vaadin.annotations.VaadinServletConfiguration;
import com.vaadin.server.VaadinRequest;
import com.vaadin.server.VaadinServlet;
import com.vaadin.ui.Button;
import com.vaadin.ui.OptionGroup;
import com.vaadin.ui.TextArea;
import com.vaadin.ui.TextField;
import com.vaadin.ui.UI;
import com.vaadin.ui.VerticalLayout;

@SuppressWarnings("serial")
@Theme("project")
public class ProjectUI extends UI {

	@WebServlet(value = "/*", asyncSupported = true)
	@VaadinServletConfiguration(productionMode = false, ui = ProjectUI.class)
	public static class Servlet extends VaadinServlet {
	}

	@Override
	protected void init(VaadinRequest request) {
		final VerticalLayout layout = new VerticalLayout();
		layout.setMargin(true);
		setContent(layout);

		Button button = new Button("Send");
		// Create text fields for first and last name, select gender and text area for application
		TextField fName = new TextField("First name");		
		TextField lName = new TextField("Last name");	
		OptionGroup gender = new OptionGroup("Gender");
		gender.addItem("Male");
		gender.addItem("Female");		
		TextArea tArea = new TextArea("Why are you applying to this job?");	
				
		//add components to layout
		layout.addComponent(fName);
		layout.addComponent(lName);
		layout.addComponent(gender);
		layout.addComponent(tArea);
		layout.addComponent(button);
				 
		//create a job application
		JobApplication jApplication = new JobApplication();
				
		//add button listener that also handles fName, lName, gender and tArea events
		MyButtonListener bListener = new MyButtonListener(jApplication);
		bListener.importComponents(fName, lName, gender, tArea, layout);
		button.addClickListener(bListener);
	}

}