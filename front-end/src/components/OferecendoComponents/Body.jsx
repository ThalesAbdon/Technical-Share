import React from "react";
import "./Body.css"


function Body() {
    return (
        <React.Fragment>
            <div className="titulo">
                <h1 className="title-h1">OFEREÇA CONHECIMENTO</h1>
            </div>
            <div className="quadrado">
                <p>O que você quer ensinar?</p>
            </div>
            <div className="paragrafo">
                <p>Meus dias disponiveis são:</p>
            </div>

            <div className="agendaContainer">
                <p className="mes">ABRIL</p>
                <div className="numerosContainer">
                    <p>01</p>
                    <p>02</p>
                    <p>03</p>
                    <p>04</p>
                    <p>05</p>
                    <p>06</p>
                    <p>07</p>
                    <p>08</p>
                    <p>09</p>
                    <p>10</p>
                    <p>11</p>
                    <p>12</p>
                    <p>13</p>
                    <p>14</p>
                    <p>15</p>
                    <p>16</p>
                    <p>17</p>
                    <p>18</p>
                    <p>19</p>
                    <p>20</p>
                    <p>21</p>
                    <p>22</p>
                    <p>23</p>
                    <p>24</p>
                    <p>25</p>
                    <p>26</p>
                    <p>27</p>
                    <p>28</p>
                    <p>29</p>
                    <p>30</p>
                    <p>31</p>
                </div>
            </div>
            <div className="paragrafo-two">
                <p>Meus horários disponiveis são:</p>
            </div>
            <div className="horariosContainer">
                <p>08:00</p>
                <p>08:30</p>
                <p>09:00</p>
                <p>09:30</p>
                <p>10:00</p>
                <p>10:30</p>
                <p>11:00</p>
                <p>13:30</p>
                <p>14:00</p>
                <p>14:30</p>
                <p>15:00</p>
                <p>15:30</p>
                <p>16:00</p>
                <p>16:30</p>
            </div>
            <div className="oferecer">
                <p>OFERECER MENTORIA</p>
            </div>

        </React.Fragment>
    )
}
export default Body