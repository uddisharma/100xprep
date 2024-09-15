"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __generator =
  (this && this.__generator) ||
  function (thisArg, body) {
    var _ = {
        label: 0,
        sent: function () {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: [],
      },
      f,
      y,
      t,
      g;
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === "function" &&
        (g[Symbol.iterator] = function () {
          return this;
        }),
      g
    );
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while ((g && ((g = 0), op[0] && (_ = 0)), _))
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y["return"]
                  : op[0]
                    ? y["throw"] || ((t = y["return"]) && t.call(y), 0)
                    : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t;
          if (((y = 0), t)) op = [op[0] & 2, t.value];
          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;
            case 4:
              _.label++;
              return { value: op[1], done: false };
            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;
            case 7:
              op = _.ops.pop();
              _.trys.pop();
              continue;
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0;
                continue;
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1];
                break;
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }
              if (t && _.label < t[2]) {
                _.label = t[2];
                _.ops.push(op);
                break;
              }
              if (t[2]) _.ops.pop();
              _.trys.pop();
              continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }
      if (op[0] & 5) throw op[1];
      return { value: op[0] ? op[1] : void 0, done: true };
    }
  };
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var bcrypt = require("bcrypt");
var prisma = new client_1.PrismaClient();
function main() {
  return __awaiter(this, void 0, void 0, function () {
    var user1, _a, _b, user2, _c, _d, interview1, interview2, job1;
    var _e, _f, _g, _h;
    return __generator(this, function (_j) {
      switch (_j.label) {
        case 0:
          _b = (_a = prisma.user).create;
          _e = {};
          _f = {
            email: "john.doe@example.com",
            fullName: "John Doe",
          };
          return [4 /*yield*/, bcrypt.hash("password123", 10)];
        case 1:
          return [
            4 /*yield*/,
            _b.apply(_a, [
              ((_e.data =
                ((_f.password = _j.sent()),
                (_f.phoneNumber = "1234567890"),
                (_f.isWorking = true),
                (_f.experience = 5),
                (_f.company = "Tech Corp"),
                (_f.role = "Software Engineer"),
                (_f.preferredRole = "Senior Software Engineer"),
                (_f.currentCTC = "100000"),
                (_f.expectedCTC = "120000"),
                (_f.resume = "resume_link"),
                (_f.photo =
                  "https://utfs.io/f/b844803f-8735-431e-85da-b96ceda1d1c3-ls6ya1.png"),
                (_f.techstacks = ["HTML CSS", "JavaScript", "TypeScript"]),
                (_f.incomingInterviewReqs = 8),
                (_f.accepted = 7),
                (_f.rejected = 1),
                _f)),
              _e),
            ]),
          ];
        case 2:
          user1 = _j.sent();
          _d = (_c = prisma.user).create;
          _g = {};
          _h = {
            email: "jane.smith@example.com",
            fullName: "Jane Smith",
          };
          return [4 /*yield*/, bcrypt.hash("password123", 10)];
        case 3:
          return [
            4 /*yield*/,
            _d.apply(_c, [
              ((_g.data =
                ((_h.password = _j.sent()),
                (_h.phoneNumber = "0987654321"),
                (_h.isWorking = false),
                (_h.experience = 3),
                (_h.company = "Web Solutions"),
                (_h.role = "Frontend Developer"),
                (_h.preferredRole = "Fullstack Developer"),
                (_h.currentCTC = "80000"),
                (_h.expectedCTC = "100000"),
                (_h.resume = "resume_link"),
                (_h.photo =
                  "https://utfs.io/f/b844803f-8735-431e-85da-b96ceda1d1c3-ls6ya1.png"),
                (_h.techstacks = ["HTML CSS", "JavaScript", "TypeScript"]),
                (_h.incomingInterviewReqs = 15),
                (_h.accepted = 10),
                (_h.rejected = 5),
                _h)),
              _g),
            ]),
          ];
        case 4:
          user2 = _j.sent();
          // Accounts
          return [
            4 /*yield*/,
            prisma.account.create({
              data: {
                userId: user1.id,
                provider: "github",
                providerAccountId: "723489",
                expiresAt: 324123234,
              },
            }),
          ];
        case 5:
          // Accounts
          _j.sent();
          return [
            4 /*yield*/,
            prisma.account.create({
              data: {
                userId: user2 === null || user2 === void 0 ? void 0 : user2.id,
                provider: "credentials",
                providerAccountId: "",
              },
            }),
            // Create Interviews
          ];
        case 6:
          _j.sent();
          return [
            4 /*yield*/,
            prisma.interviews.create({
              data: {
                intervieweeId: user1.id,
                interviewerId: user2.id,
                scheduledAt: new Date("2023-06-12T10:00:00Z"),
                accepted_For_Time: new Date("2023-06-10T10:00:00Z"),
                isCompleted: true,
                techstack: ["HTML CSS", "JavaScript", "TypeScript"],
                rating: 5,
                feedback: "Great interview!",
                allRating: {
                  technical: 5,
                  communication: 4,
                  problemSolving: 5,
                },
              },
            }),
          ];
        case 7:
          interview1 = _j.sent();
          return [
            4 /*yield*/,
            prisma.interviews.create({
              data: {
                intervieweeId: user2.id,
                interviewerId: user1.id,
                scheduledAt: new Date("2023-06-13T14:00:00Z"),
                accepted_For_Time: new Date("2023-06-11T14:00:00Z"),
                isCompleted: false,
                techstack: ["HTML CSS", "JavaScript", "TypeScript"],
                rating: null,
                feedback: null,
                allRating: {
                  technical: null,
                  communication: null,
                  problemSolving: null,
                },
              },
            }),
          ];
        case 8:
          interview2 = _j.sent();
          return [
            4 /*yield*/,
            prisma.job.create({
              data: {
                title: "Senior Software Engineer",
                description: "Looking for an experienced software engineer.",
                location: "New York, NY",
                salary: "120000",
                company: "Tech Corp",
                link: "https://techcorp.com/jobs/1",
                requirements: ["JavaScript", "React", "Node.js"],
                startDate: new Date("2023-07-01T00:00:00Z"),
                endDate: new Date("2023-07-31T00:00:00Z"),
              },
            }),
          ];
        case 9:
          job1 = _j.sent();
          return [
            4 /*yield*/,
            prisma.job.create({
              data: {
                title: "Frontend Developer",
                description: "Looking for a skilled frontend developer.",
                location: "San Francisco, CA",
                salary: "100000",
                company: "Web Solutions",
                link: "https://websolutions.com/jobs/2",
                requirements: ["HTML", "CSS", "JavaScript"],
                startDate: new Date("2023-08-01T00:00:00Z"),
                endDate: new Date("2023-08-31T00:00:00Z"),
              },
            }),
          ];
        case 10:
          _j.sent();
          // Create Email Logs
          return [
            4 /*yield*/,
            prisma.emailLog.create({
              data: {
                interviewId: interview1.id,
                emailSentAt: new Date("2023-06-10T12:00:00Z"),
              },
            }),
          ];
        case 11:
          // Create Email Logs
          _j.sent();
          return [
            4 /*yield*/,
            prisma.emailLog.create({
              data: {
                interviewId: interview2.id,
                emailSentAt: new Date("2023-06-11T16:00:00Z"),
              },
            }),
          ];
        case 12:
          _j.sent();
          // handbooks
          return [
            4 /*yield*/,
            prisma.handbook.create({
              data: {
                title: "JavaScript Handbook",
                description: "A comprehensive guide to JavaScript.",
                link: "b30b884e53514b13b09b562fc02ad1a3",
              },
            }),
          ];
        case 13:
          // handbooks
          _j.sent();
          return [
            4 /*yield*/,
            prisma.handbook.create({
              data: {
                title: "React Handbook",
                description: "A comprehensive guide to React.",
                link: "0b97a34530e64029a5c3022a29476fed",
              },
            }),
          ];
        case 14:
          _j.sent();
          // handbook requests
          return [
            4 /*yield*/,
            prisma.handbookRequest.create({
              data: {
                title: "Next JS",
                description: "Add some notes regarding SSR , CSR",
              },
            }),
          ];
        case 15:
          // handbook requests
          _j.sent();
          return [
            4 /*yield*/,
            prisma.handbookRequest.create({
              data: {
                title: "React JS",
                description: "Add notes about lazy loading ",
              },
            }),
          ];
        case 16:
          _j.sent();
          return [2 /*return*/];
      }
    });
  });
}
main()
  .then(function () {
    console.log("Seeded successfully");
  })
  .catch(function (e) {
    console.error(e);
    process.exit(1);
  })
  .finally(function () {
    return __awaiter(void 0, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4 /*yield*/, prisma.$disconnect()];
          case 1:
            _a.sent();
            return [2 /*return*/];
        }
      });
    });
  });
