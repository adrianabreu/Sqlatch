package com.sqlatch;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.mycompany.databasehandler.DataBaseHandler;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.Hashtable;
import java.util.List;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class QueryServlet extends HttpServlet {

    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet query</title>");            
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet query at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        try (PrintWriter out = response.getWriter()) {
            
            if ( request.getParameterMap().containsKey("query")) {
                Map params = new Hashtable<String, String>();

                params.put("path","jdbc:mysql://localhost:3306/EMPRESA?zeroDate" +
                        "TimeBehavior=convertToNull" + 
                        "&serverTimezone=America/New_York");
                params.put("user","student");
                params.put("pass","student");

                try {
                    DataBaseHandler dbHandler = new DataBaseHandler((Hashtable<String, String>) params);
                    
                    List tables = dbHandler.tryQuery(request.getParameter("query"));
                    
                    Gson gson = new GsonBuilder().setPrettyPrinting().create();
                    out.println(gson.toJson(tables));           

                } catch ( SQLException err) {
                    response.sendError(500, err.toString());
                } catch (ClassNotFoundException ex) {
                    Logger.getLogger(QueryServlet.class.getName()).log(Level.SEVERE, null, ex);
                }
            } else {
                response.sendError(500, "No query provided");
            }
        }        
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }

}
