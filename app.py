# from flask import Flask

# app = Flask(__name__)

# @app.route('/')
# def home():
#     return "Hello, Organ Donation Management System!"

# if __name__ == '__main__':
#     app.run(debug=True)

# from fpdf import FPDF
# from datetime import datetime
# import webbrowser
# import os

# class FitnessCertificate:
#     def _init_(self, name, age, fitness_level, doctor_name):
#         self.name = name
#         self.age = age
#         self.fitness_level = fitness_level
#         self.doctor_name = doctor_name
#         self.date_issued = datetime.now().strftime("%Y-%m-%d")

#     def create_pdf(self, file_name="fitness_certificate.pdf"):
#         pdf = FPDF()
#         pdf.add_page()

#         # Title
#         pdf.set_font("Arial", "B", 16)
#         pdf.cell(200, 10, "Fitness Certificate", ln=True, align="C")

#         # Personal Info
#         pdf.set_font("Arial", size=12)
#         pdf.ln(10)
#         pdf.cell(200, 10, f"Name: {self.name}", ln=True, align="L")
#         pdf.cell(200, 10, f"Age: {self.age}", ln=True, align="L")
#         pdf.cell(200, 10, f"Fitness Level: {self.fitness_level}", ln=True, align="L")
#         pdf.cell(200, 10, f"Issued by: Dr. {self.doctor_name}", ln=True, align="L")

#         # Date
#         pdf.cell(200, 10, f"Date Issued: {self.date_issued}", ln=True, align="L")

#         # Signature line
#         pdf.ln(20)
#         pdf.cell(200, 10, "_", ln=True, align="R")
#         pdf.cell(200, 10, "Doctor's Signature", ln=True, align="R")

#         pdf.output(file_name)
#         print(f"Fitness Certificate saved as {file_name}")

# while True:
#     # Gather input for the certificate
#     name = input("Enter the donor's name: ")
#     age = input("Enter the donor's age: ")
#     fitness_level = input("Enter the fitness level (e.g., Excellent, Good, Fair): ")
#     doctor_name = input("Enter the doctor's name: ")

#     # Generate the certificate
#     certificate = FitnessCertificate(name, age, fitness_level, doctor_name)
#     certificate.create_pdf()

#     # Ask if the user wants to generate another certificate
#     another = input("Do you want to create another certificate? (yes/no): ").strip().lower()
#     if another != "yes":
#         print("Certificate generation complete.")
#         break


from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt

app = Flask(__name__)
app.config.from_object('config.Config')
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)

from app import routes, models
