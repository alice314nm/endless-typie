// Keyboard.js
import React from 'react';
import Key from './key';

export default function Keyboard() {
    return (
        <div className="flex flex-col items-center">
            {/* First Row */}
            <div className="flex">
                <Key dataKey="192" topLabel="`" bottomLabel="~" styleClass="red" />
                <Key dataKey="49" topLabel="!" bottomLabel="1" styleClass="red"/>
                <Key dataKey="50" topLabel="@" bottomLabel="2" styleClass="red"/>
                <Key dataKey="51" topLabel="#" bottomLabel="3" styleClass="yellow"/>
                <Key dataKey="52" topLabel="$" bottomLabel="4" styleClass="green"/>
                <Key dataKey="53" topLabel="%" bottomLabel="5" styleClass="blue"/>
                <Key dataKey="54" topLabel="^" bottomLabel="6" styleClass="blue"/>
                <Key dataKey="55" topLabel="&" bottomLabel="7" styleClass="purple"/>
                <Key dataKey="56" topLabel="*" bottomLabel="8" styleClass="red"/>
                <Key dataKey="57" topLabel="(" bottomLabel="9" styleClass="yellow"/>
                <Key dataKey="48" topLabel=")" bottomLabel="0" styleClass="green"/>
                <Key dataKey="189" topLabel="_" bottomLabel="-" styleClass="green"/>
                <Key dataKey="187" topLabel="+" bottomLabel="=" styleClass="green"/>
                <Key dataKey="8" topLabel="backspace" styleClass="white" />
            </div>

            {/* Second Row */}
            <div className="flex">
                <Key dataKey="9" topLabel="tab"/>
                <Key dataKey="81" topLabel="q" styleClass="red"/>
                <Key dataKey="87" topLabel="w" styleClass="yellow"/>
                <Key dataKey="69" topLabel="e" styleClass="green"/>
                <Key dataKey="82" topLabel="r" styleClass="blue"/>
                <Key dataKey="84" topLabel="t" styleClass="blue"/>
                <Key dataKey="89" topLabel="y" styleClass="purple"/>
                <Key dataKey="85" topLabel="u" styleClass="purple"/>
                <Key dataKey="73" topLabel="i" styleClass="red"/>
                <Key dataKey="79" topLabel="o" styleClass="yellow"/>
                <Key dataKey="80" topLabel="p" styleClass="green"/>
                <Key dataKey="219" topLabel="[" styleClass="green"/>
                <Key dataKey="221" topLabel="]" styleClass="green"/>
                <Key dataKey="220" topLabel="|" bottomLabel="\" styleClass="green"/>
            </div>

            {/* Third Row */}
            <div className="flex">
                <Key dataKey="20" topLabel="caps lock" />
                <Key dataKey="65" topLabel="a" styleClass="red"/>
                <Key dataKey="83" topLabel="s" styleClass="yellow"/>
                <Key dataKey="68" topLabel="d" styleClass="green"/>
                <Key dataKey="70" topLabel="f" styleClass="blue"/>
                <Key dataKey="71" topLabel="g" styleClass="blue"/>
                <Key dataKey="72" topLabel="h" styleClass="purple"/>
                <Key dataKey="74" topLabel="j" styleClass="purple"/>
                <Key dataKey="75" topLabel="k" styleClass="red"/>
                <Key dataKey="76" topLabel="l" styleClass="yellow"/>
                <Key dataKey="186" topLabel=";" bottomLabel=":" styleClass="green"/>
                <Key dataKey="222" topLabel="'" bottomLabel="&quot;" styleClass="green"/>
                <Key dataKey="13" topLabel="enter" />
            </div>

            {/* Fourth Row */}
            <div className="flex">
                <Key dataKey="16" topLabel="shift" />
                <Key dataKey="90" topLabel="z" styleClass="red"/>
                <Key dataKey="88" topLabel="x" styleClass="yellow"/>
                <Key dataKey="67" topLabel="c" styleClass="green"/>
                <Key dataKey="86" topLabel="v" styleClass="blue"/>
                <Key dataKey="66" topLabel="b" styleClass="blue"/>
                <Key dataKey="78" topLabel="n" styleClass="purple"/>
                <Key dataKey="77" topLabel="m" styleClass="purple"/>
                <Key dataKey="188" topLabel="<" bottomLabel="," styleClass="red"/>
                <Key dataKey="190" topLabel=">" bottomLabel="." styleClass="yellow"/>
                <Key dataKey="199" topLabel="?" bottomLabel="/" styleClass="green"/>
                <Key dataKey="616" topLabel="shift" />
            </div>

            {/* Fifth Row */}
            <div className="flex">
                <Key dataKey="17" topLabel="ctrl" />
                <Key dataKey="17" topLabel="win" />
                <Key dataKey="17" topLabel="alt" />
                <Key dataKey="32" topLabel="space" />
                <Key dataKey="17" topLabel="alt" />
                <Key dataKey="17" topLabel="fn" />
                <Key dataKey="17" topLabel="smth" />
                <Key dataKey="17" topLabel="ctrl" />
            </div>
        </div>
    );
};
