using Microsoft.EntityFrameworkCore.Migrations;

namespace WebApplication3.Migrations
{
    public partial class updateAssisstant : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "Assistants",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Year",
                table: "Assistants",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Type",
                table: "Assistants");

            migrationBuilder.DropColumn(
                name: "Year",
                table: "Assistants");
        }
    }
}
