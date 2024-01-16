package com.liftoff.trail_blazers.model.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.liftoff.trail_blazers.model.Plants;

import java.util.Date;
import java.util.List;

public class TripsPlantsDTO {

    private String tripName;
    private String location;

    @JsonFormat(pattern="yyyy-MM-dd")
    private Date date;
    private String notes;
    private List<Plants> plants;
    private String userName;

    public TripsPlantsDTO(){}

    public String getTripName() {
        return tripName;
    }

    public void setTripName(String tripName) {
        this.tripName = tripName;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public List<Plants> getPlants() {return plants;}

    public void setPlants(List<Plants> plants) {
        this.plants = plants;
    }

    public String getUserName() {
        return userName;
    }

    public void setuserName(String userName) {
        this.userName = userName;
    }
}
