﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using WebApplication3.Data;

namespace WebApplication3.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20220301203856_PhotoType")]
    partial class PhotoType
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.14-servicing-32113");

            modelBuilder.Entity("WebApplication3.Models.Assistant", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CV");

                    b.Property<string>("Qualification");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Assistants");
                });

            modelBuilder.Entity("WebApplication3.Models.City", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Cities");
                });

            modelBuilder.Entity("WebApplication3.Models.Manager", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("AvilableDate");

                    b.Property<int>("CityId");

                    b.Property<string>("Drugs");

                    b.Property<string>("JobType");

                    b.Property<double>("Salary");

                    b.Property<int>("TownId");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("CityId");

                    b.HasIndex("TownId");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("Managers");
                });

            modelBuilder.Entity("WebApplication3.Models.Pharmacy", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CityId");

                    b.Property<string>("DetailedAddress");

                    b.Property<string>("Name");

                    b.Property<int>("TownId");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("CityId");

                    b.HasIndex("TownId");

                    b.HasIndex("UserId");

                    b.ToTable("Pharmacies");
                });

            modelBuilder.Entity("WebApplication3.Models.PhGraduated", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CollageType");

                    b.Property<string>("JobType");

                    b.Property<int?>("MainGuildCardId");

                    b.Property<int?>("SubGuildCardId");

                    b.Property<string>("University");

                    b.Property<int>("UserId");

                    b.Property<int>("YearOfGraduation");

                    b.HasKey("Id");

                    b.HasIndex("MainGuildCardId");

                    b.HasIndex("SubGuildCardId");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("PhGraduateds");
                });

            modelBuilder.Entity("WebApplication3.Models.Photo", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int?>("AssistantId");

                    b.Property<int?>("PhStudentId");

                    b.Property<int?>("PharmacyId");

                    b.Property<string>("PublicId");

                    b.Property<string>("Type");

                    b.Property<string>("Url");

                    b.Property<int?>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("AssistantId")
                        .IsUnique();

                    b.HasIndex("PhStudentId")
                        .IsUnique();

                    b.HasIndex("PharmacyId")
                        .IsUnique();

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("Photo");
                });

            modelBuilder.Entity("WebApplication3.Models.PhStudent", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CollageType");

                    b.Property<string>("University");

                    b.Property<int>("UserId");

                    b.Property<string>("Year");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("PhStudents");
                });

            modelBuilder.Entity("WebApplication3.Models.SocialLinks", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Email");

                    b.Property<string>("Facebook");

                    b.Property<string>("Instagram");

                    b.Property<string>("Telegram");

                    b.Property<string>("Twitter");

                    b.Property<int>("UserId");

                    b.Property<string>("Whatsapp");

                    b.HasKey("Id");

                    b.HasIndex("UserId")
                        .IsUnique();

                    b.ToTable("SocialLinks");
                });

            modelBuilder.Entity("WebApplication3.Models.Town", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CityId");

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.HasIndex("CityId");

                    b.ToTable("Towns");
                });

            modelBuilder.Entity("WebApplication3.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("CityId");

                    b.Property<DateTime>("Created");

                    b.Property<DateTime>("DateOfBirth");

                    b.Property<string>("FullName");

                    b.Property<string>("Gender");

                    b.Property<DateTime>("LastActive");

                    b.Property<string>("NationalId");

                    b.Property<byte[]>("PasswordHash");

                    b.Property<byte[]>("PasswordSalt");

                    b.Property<string>("Phone");

                    b.Property<int>("TownId");

                    b.Property<string>("UserName");

                    b.HasKey("Id");

                    b.HasIndex("CityId");

                    b.HasIndex("TownId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("WebApplication3.Models.Value", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Name");

                    b.HasKey("Id");

                    b.ToTable("Values");
                });

            modelBuilder.Entity("WebApplication3.Models.Assistant", b =>
                {
                    b.HasOne("WebApplication3.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebApplication3.Models.Manager", b =>
                {
                    b.HasOne("WebApplication3.Models.City", "City")
                        .WithMany("Managers")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebApplication3.Models.Town", "Town")
                        .WithMany("Managers")
                        .HasForeignKey("TownId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebApplication3.Models.User", "User")
                        .WithOne("Managers")
                        .HasForeignKey("WebApplication3.Models.Manager", "UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebApplication3.Models.Pharmacy", b =>
                {
                    b.HasOne("WebApplication3.Models.City", "City")
                        .WithMany("Pharmacies")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebApplication3.Models.Town", "Town")
                        .WithMany("Pharmacies")
                        .HasForeignKey("TownId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebApplication3.Models.User", "User")
                        .WithMany("Pharmacies")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebApplication3.Models.PhGraduated", b =>
                {
                    b.HasOne("WebApplication3.Models.Photo", "MainGuildCard")
                        .WithMany()
                        .HasForeignKey("MainGuildCardId");

                    b.HasOne("WebApplication3.Models.Photo", "SubGuildCard")
                        .WithMany()
                        .HasForeignKey("SubGuildCardId");

                    b.HasOne("WebApplication3.Models.User", "User")
                        .WithOne("Graduateds")
                        .HasForeignKey("WebApplication3.Models.PhGraduated", "UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebApplication3.Models.Photo", b =>
                {
                    b.HasOne("WebApplication3.Models.Assistant", "Assistant")
                        .WithOne("NationalIdPhoto")
                        .HasForeignKey("WebApplication3.Models.Photo", "AssistantId");

                    b.HasOne("WebApplication3.Models.PhStudent", "PhStudent")
                        .WithOne("CollageCardPhoto")
                        .HasForeignKey("WebApplication3.Models.Photo", "PhStudentId");

                    b.HasOne("WebApplication3.Models.Pharmacy", "Pharmacy")
                        .WithOne("LicensePhoto")
                        .HasForeignKey("WebApplication3.Models.Photo", "PharmacyId");

                    b.HasOne("WebApplication3.Models.User", "User")
                        .WithOne("Photo")
                        .HasForeignKey("WebApplication3.Models.Photo", "UserId");
                });

            modelBuilder.Entity("WebApplication3.Models.PhStudent", b =>
                {
                    b.HasOne("WebApplication3.Models.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebApplication3.Models.SocialLinks", b =>
                {
                    b.HasOne("WebApplication3.Models.User", "User")
                        .WithOne("SocialLinks")
                        .HasForeignKey("WebApplication3.Models.SocialLinks", "UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebApplication3.Models.Town", b =>
                {
                    b.HasOne("WebApplication3.Models.City", "City")
                        .WithMany("Towns")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("WebApplication3.Models.User", b =>
                {
                    b.HasOne("WebApplication3.Models.City", "City")
                        .WithMany("Users")
                        .HasForeignKey("CityId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("WebApplication3.Models.Town", "Town")
                        .WithMany("Users")
                        .HasForeignKey("TownId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}