<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Age Calculator</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        form {
            margin-bottom: 20px;
        }
        input {
            padding: 10px;
            margin: 5px;
            width: 80px;
            font-size: 16px;
        }
        button {
            padding: 10px 20px;
            font-size: 16px;
            cursor: pointer;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 4px;
        }
        button:hover {
            background-color: #0056b3;
        }
        p {
            font-size: 18px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Age Calculator</h1>
        <form id="dobForm">
            <label for="day">Day:</label>
            <input type="number" id="day" name="day" min="1" max="31" required>
            <br>
            <label for="month">Month:</label>
            <input type="number" id="month" name="month" min="1" max="12" required>
            <br>
            <label for="year">Year:</label>
            <input type="number" id="year" name="year" min="1900" max="2100" required>
            <br>
            <button type="button" onclick="calculateAge()">Calculate Age</button>
        </form>
        <p id="result"></p>
    </div>

    <script>
        function calculateAge() {
            // Get values from the form
            const day = parseInt(document.getElementById('day').value);
            const month = parseInt(document.getElementById('month').value) - 1; // Months are 0-based in JavaScript Date
            const year = parseInt(document.getElementById('year').value);

            // Create a Date object for the input date
            const dob = new Date(year, month, day);

            // Get today's date
            const today = new Date();

            // Calculate the difference in years
            let age = today.getFullYear() - dob.getFullYear();

            // Adjust age if the birthday hasn't occurred yet this year
            const monthDiff = today.getMonth() - dob.getMonth();
            const dayDiff = today.getDate() - dob.getDate();
            if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
                age--;
            }

            // Display the result
            document.getElementById('result').innerText = `You are ${age} years old.`;
        }
    </script>
</body>
</html>

