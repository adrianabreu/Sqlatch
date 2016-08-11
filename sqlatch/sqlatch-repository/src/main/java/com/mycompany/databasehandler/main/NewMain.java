/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.databasehandler.main;

import com.mycompany.databasehandler.DataBaseHandler;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Hashtable;
import java.util.Map;

/**
 *
 * @author kotenoru
 */
public class NewMain {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) throws ClassNotFoundException {
        
        Map params = new Hashtable<String, String>();
        
        params.put("path","jdbc:mysql://localhost:3306/test?zeroDateTimeBehavior=convertToNull&serverTimezone=America/New_York");
        params.put("user","student");
        params.put("pass","student");
        
         try {
            DataBaseHandler my_schema = new DataBaseHandler((Hashtable<String, String>) params);
            
             System.out.println(my_schema.tryQuery("SHOW TABLES"));
             
         } catch ( SQLException err) {
             
             System.out.println(err.toString());
             
         } catch ( ClassNotFoundException e) {
             
             System.out.println(e.toString());
         } 
    
    }
    
}
