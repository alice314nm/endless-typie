// Keyboard.js
import React, { useState } from 'react';
import Key from './key';

export default function Keyboard({ currentKeyToType }) {
    const currentKey = currentKeyToType ? currentKeyToType.toLowerCase() : '';
    const [shiftLeftFocused, setShiftLeftFocused] = useState(false);
    const [shiftRightFocused, setShiftRightFocused] = useState(false)



    return (
        <div className="flex flex-col items-center">
            {/* First Row */}
            <div className="flex">
                <Key dataKey="192" topLabel="`" bottomLabel="~" styleClass="red" focused={currentKey === "`" || currentKey === "~"} />
                <Key dataKey="49" topLabel="!" bottomLabel="1" styleClass="red" focused={currentKey === "!" || currentKey === "1"} />
                <Key dataKey="50" topLabel="@" bottomLabel="2" styleClass="red" focused={currentKey === "@" || currentKey === "2"} />
                <Key dataKey="51" topLabel="#" bottomLabel="3" styleClass="yellow" focused={currentKey === "#" || currentKey === "3"} />
                <Key dataKey="52" topLabel="$" bottomLabel="4" styleClass="green" focused={currentKey === "$" || currentKey === "4"} />
                <Key dataKey="53" topLabel="%" bottomLabel="5" styleClass="blue" focused={currentKey === "%" || currentKey === "5"} />
                <Key dataKey="54" topLabel="^" bottomLabel="6" styleClass="blue" focused={currentKey === "^" || currentKey === "6"} />
                <Key dataKey="55" topLabel="&" bottomLabel="7" styleClass="purple" focused={currentKey === "&" || currentKey === "7"} />
                <Key dataKey="56" topLabel="*" bottomLabel="8" styleClass="red" focused={currentKey === "*" || currentKey === "8"} />
                <Key dataKey="57" topLabel="(" bottomLabel="9" styleClass="yellow" focused={currentKey === "(" || currentKey === "9"} />
                <Key dataKey="48" topLabel=")" bottomLabel="0" styleClass="green" focused={currentKey === ")" || currentKey === "0"} />
                <Key dataKey="189" topLabel="_" bottomLabel="-" styleClass="green" focused={currentKey === "_" || currentKey === "-"} />
                <Key dataKey="187" topLabel="+" bottomLabel="=" styleClass="green" focused={currentKey === "+" || currentKey === "="} />
                <Key dataKey="8" topLabel="backspace" styleClass="white" focused={currentKey === "8"} />
            </div>

            {/* Second Row */}
            <div className="flex">
                <Key dataKey="9" topLabel="tab"/>
                <Key dataKey="81" topLabel="q" styleClass="red" focused={currentKey === "q"} />
                <Key dataKey="87" topLabel="w" styleClass="yellow" focused={currentKey === "w"} />
                <Key dataKey="69" topLabel="e" styleClass="green" focused={currentKey === "e"} />
                <Key dataKey="82" topLabel="r" styleClass="blue" focused={currentKey === "r"} />
                <Key dataKey="84" topLabel="t" styleClass="blue" focused={currentKey === "t"} />
                <Key dataKey="89" topLabel="y" styleClass="purple" focused={currentKey === "y"} />
                <Key dataKey="85" topLabel="u" styleClass="purple" focused={currentKey === "u"} />
                <Key dataKey="73" topLabel="i" styleClass="red" focused={currentKey === "i"} />
                <Key dataKey="79" topLabel="o" styleClass="yellow" focused={currentKey === "o"} />
                <Key dataKey="80" topLabel="p" styleClass="green" focused={currentKey === "p"} />
                <Key dataKey="219" topLabel="{" bottomLabel="[" styleClass="green" focused={currentKey === "[" || currentKey === "{"} />
                <Key dataKey="221" topLabel="}" bottomLabel="[" styleClass="green" focused={currentKey === "]" || currentKey === "}"} />
                <Key dataKey="220" topLabel="|" bottomLabel="\" styleClass="green" focused={currentKey === "|" || currentKey === "\\"} />
            </div>

            {/* Third Row */}
            <div className="flex">
                <Key dataKey="20" topLabel="caps lock"/>
                <Key dataKey="65" topLabel="a" styleClass="red" focused={currentKey === "a"} />
                <Key dataKey="83" topLabel="s" styleClass="yellow" focused={currentKey === "s"} />
                <Key dataKey="68" topLabel="d" styleClass="green" focused={currentKey === "d"} />
                <Key dataKey="70" topLabel="f" styleClass="blue" focused={currentKey === "f"} />
                <Key dataKey="71" topLabel="g" styleClass="blue" focused={currentKey === "g"} />
                <Key dataKey="72" topLabel="h" styleClass="purple" focused={currentKey === "h"} />
                <Key dataKey="74" topLabel="j" styleClass="purple" focused={currentKey === "j"} />
                <Key dataKey="75" topLabel="k" styleClass="red" focused={currentKey === "k"} />
                <Key dataKey="76" topLabel="l" styleClass="yellow" focused={currentKey === "l"} />
                <Key dataKey="186" topLabel=";" bottomLabel=":" styleClass="green" focused={currentKey === ";" || currentKey === ":"} />
                <Key dataKey="222" topLabel="'" bottomLabel="&quot;" styleClass="green" focused={currentKey === "'" || currentKey === "&quot;"} />
                <Key dataKey="13" topLabel="enter" />
            </div>

            {/* Fourth Row */}
            <div className="flex">
                <Key dataKey="16" topLabel="shift" focused={shiftLeftFocused} />
                <Key dataKey="90" topLabel="z" styleClass="red" focused={currentKey === "z"} />
                <Key dataKey="88" topLabel="x" styleClass="yellow" focused={currentKey === "x"} />
                <Key dataKey="67" topLabel="c" styleClass="green" focused={currentKey === "c"} />
                <Key dataKey="86" topLabel="v" styleClass="blue" focused={currentKey === "v"} />
                <Key dataKey="66" topLabel="b" styleClass="blue" focused={currentKey === "b"} />
                <Key dataKey="78" topLabel="n" styleClass="purple" focused={currentKey === "n"} />
                <Key dataKey="77" topLabel="m" styleClass="purple" focused={currentKey === "m"} />
                <Key dataKey="188" topLabel="<" bottomLabel="," styleClass="red" focused={currentKey === "," || currentKey === "<"} />
                <Key dataKey="190" topLabel=">" bottomLabel="." styleClass="yellow" focused={currentKey === "." || currentKey === ">"} />
                <Key dataKey="191" topLabel="?" bottomLabel="/" styleClass="green" focused={currentKey === "/" || currentKey === "?"} />
                <Key dataKey="616" topLabel="shift" focused={shiftRightFocused} />
            </div>

            {/* Fifth Row */}
            <div className="flex">
                <Key dataKey="17" topLabel="ctrl"/>
                <Key dataKey="17" topLabel="win"/>
                <Key dataKey="17" topLabel="alt"/>
                <Key dataKey="32" topLabel="space" focused={currentKey === " "} />
                <Key dataKey="17" topLabel="alt"/>
                <Key dataKey="17" topLabel="fn" />
                <Key dataKey="17" topLabel="smth"/>
                <Key dataKey="17" topLabel="ctrl" />
            </div>
        </div>
    );
};
