/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.databasehandler;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Hashtable;
import java.util.Map;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

/**
 * @author kotenoru
 */
public class DataBaseHandler {
    
    private Connection jdbcConnection;
    
    /**
     *
     * @param params
     * @throws ClassNotFoundException
     * @throws SQLexception
     */
    public DataBaseHandler(Map<String,String> params) throws ClassNotFoundException, SQLException {
            //Register the driver for catalina
            Class.forName("com.mysql.cj.jdbc.Driver");
            
            jdbcConnection = DriverManager.getConnection(params.get("path"),
                    params.get("user"), params.get("pass"));       
    }
    
    public List tryQuery(String query) throws SQLException {
        
        List<Map<String,String>> jsonData = new ArrayList<>();
        
        Map<String, Object> results = new Hashtable<>();
        
        List<String> colNames;
        
        ResultSet rs = jdbcConnection.createStatement().executeQuery(query);
        
        if (rs.isBeforeFirst()){
            colNames = new ArrayList<>();

            int totalRows = rs.getMetaData().getColumnCount();
            for (int i = 1; i <= totalRows; i++)
                colNames.add(rs.getMetaData().getColumnName(i));


            while(rs.next()) { 
                Map<String, String> rows = new Hashtable<>();

                for (int i = 1; i <= totalRows; i++) {
                    rows.put(colNames.get(i-1),rs.getString(i));
                }
                jsonData.add(rows);
            }
        }
        
        
        return jsonData;
    }
    
}
