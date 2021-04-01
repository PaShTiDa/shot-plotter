import { teamLegend } from "./shots/legend.js";

function setUpOptions() {
    d3.select("#options")
        .append("div")
        .attr("class", "column");
    periodRadioButtons(".column");

    d3.select(".column")
        .append("div")
        .attr("class", "vr");
    blueOrangeRadioButtons(".column");

    d3.select("#options").append("hr");
    var col = d3
        .select("#options")
        .append("div")
        .attr("class", "column")
        .attr("id", "row2");
    playerField("#row2");
    d3.select("#row2")
        .append("div")
        .attr("class", "vr");
    shotTypeDropdown("#row2");
}

function blueOrangeRadioButtons(id) {
    d3.select(id)
        .append("div")
        .append("div")
        .attr("class", "team-select")
        .append("h3")
        .text("Team")
        .attr("class", "center");

    var wrapper = d3
        .select(".team-select")
        .append("div")
        .attr("class", "form-group");
    var blueDiv = wrapper.append("div").attr("class", "form-check");
    blueDiv
        .append("input")
        .attr("class", "form-check-input")
        .attr("type", "radio")
        .attr("name", "team-bool")
        .attr("value", "#blue-team-name")
        .attr("checked", true);
    blueDiv
        .append("input")
        .attr("type", "text")
        .attr("id", "blue-team-name")
        .attr("value", "Home")
        .on("change", () => teamLegend());

    var orangeDiv = wrapper.append("div").attr("class", "form-check");
    orangeDiv
        .append("input")
        .attr("class", "form-check-input")
        .attr("type", "radio")
        .attr("name", "team-bool")
        .attr("value", "#orange-team-name");
    orangeDiv
        .append("input")
        .attr("type", "text")
        .attr("id", "orange-team-name")
        .attr("value", "Away")
        .on("change", () => teamLegend());
}

function periodRadioButtons(id) {
    d3.select(id)
        .append("div")
        .attr("class", "period-select")
        .append("h3")
        .text("Period")
        .attr("class", "center");

    var oneDiv = d3
        .select(".period-select")
        .append("div")
        .attr("class", "form-check vertical");
    oneDiv
        .append("input")
        .attr("class", "form-check-input")
        .attr("type", "radio")
        .attr("name", "period")
        .attr("id", "one")
        .attr("value", "1")
        .attr("checked", true);
    oneDiv
        .append("label")
        .attr("class", "form-check-label")
        .attr("for", "one")
        .text("1");

    var twoDiv = d3
        .select(".period-select")
        .append("div")
        .attr("class", "form-check vertical");
    twoDiv
        .append("input")
        .attr("class", "form-check-input")
        .attr("type", "radio")
        .attr("name", "period")
        .attr("id", "two")
        .attr("value", "2");
    twoDiv
        .append("label")
        .attr("class", "form-check-label")
        .attr("for", "two")
        .text("2");

    var threeDiv = d3
        .select(".period-select")
        .append("div")
        .attr("class", "form-check vertical");
    threeDiv
        .append("input")
        .attr("class", "form-check-input")
        .attr("type", "radio")
        .attr("name", "period")
        .attr("id", "three")
        .attr("value", "3");
    threeDiv
        .append("label")
        .attr("class", "form-check-label")
        .attr("for", "three")
        .text("3");

    var otDiv = d3
        .select(".period-select")
        .append("div")
        .attr("class", "form-check vertical");
    otDiv
        .append("input")
        .attr("class", "form-check-input")
        .attr("type", "radio")
        .attr("name", "period")
        .attr("id", "ot")
        .attr("value", "OT");
    otDiv
        .append("label")
        .attr("class", "form-check-label")
        .attr("for", "ot")
        .text("OT");
}

function playerField(id) {
    var tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .text(
            "Player will appear on shot in rink if player is 2 or less characters long."
        );

    var div = d3
        .select(id)
        .append("div")
        .attr("class", "even-width");
    div.append("h3")
        .text("Player")
        .attr("class", "center")
        .append("i")
        .attr("class", "bi bi-info-circle")
        .on("mouseover", function(e) {
            tooltip
                .transition()
                .duration(200)
                .style("opacity", 0.9)
                .style("left", e.pageX + 10 + "px")
                .style("top", e.pageY - 28 + "px");
        })
        .on("mouseout", function() {
            tooltip
                .transition()
                .duration(200)
                .style("opacity", 0.0);
        });
    var playerDiv = div.append("div").attr("class", "form-group");
    playerDiv
        .append("input")
        .attr("type", "text")
        .attr("class", "form-control")
        .attr("id", "player-input")
        .attr("value", "");
}

function shotTypeDropdown(id) {
    // https://bl.ocks.org/d3noob/a22c42db65eb00d4e369
    var tooltip = d3
        .select("body")
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0)
        .text(
            "To add new shot types, type into the dropdown, then select the new option or press Enter."
        );

    var div = d3
        .select(id)
        .append("div")
        .attr("class", "even-width");
    div.append("h3")
        .text("Type")
        .attr("class", "center")
        .append("i")
        .attr("class", "bi bi-info-circle")
        .on("mouseover", function(e) {
            tooltip
                .transition()
                .duration(200)
                .style("opacity", 0.9)
                .style("left", e.pageX + 10 + "px")
                .style("top", e.pageY - 28 + "px");
        })
        .on("mouseout", function() {
            tooltip
                .transition()
                .duration(200)
                .style("opacity", 0.0);
        });

    var select = div
        .append("div")
        .append("select")
        .attr("id", "shot-type");
    select
        .append("option")
        .text("Shot")
        .attr("selected", true);
    select.append("option").text("Goal");
    select.append("option").text("Block");
    select.append("option").text("Miss");
}

function getOptionsObject() {
    var options = {};
    d3.select("#shot-type")
        .selectAll("option")
        .each(function(d, i) {
            options[d3.select(this).property("value")] = i;
        });
    return options;
}

function getOptionsList() {
    var options = [];
    d3.select("#shot-type")
        .selectAll("option")
        .each(function(d, i) {
            options[i] = d3.select(this).property("value");
        });
    return options;
}

export { setUpOptions, getOptionsObject, getOptionsList };
