class Converter {

    static ToRomanNumerals(num)
    {
        //arrays used for lookup/conversion
        var ones = new Array ('I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX')
        var tens = new Array ('X', "XX", 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC')
        var hundreds = new Array ('C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM')

        var romanNumeral = ""
        var digits = String(num).split("").map((num) => {return Number(num)}).reverse()

        for (let i = digits.length; i > 0; i--)
        {
            if(digits[i - 1] === 0)
                continue;

            if(i === 3)
                romanNumeral += hundreds[digits[i - 1] - 1]
            
            if(i === 2)
                romanNumeral += tens[digits[i - 1] - 1]
            
            if(i === 1)
                romanNumeral += ones[digits[i - 1] - 1]

        }

        return romanNumeral
    }
}

export default Converter;