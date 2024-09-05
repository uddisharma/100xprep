"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var bcrypt = require("bcrypt");
var prisma = new client_1.PrismaClient();
function hashPassword(password) {
    return __awaiter(this, void 0, void 0, function () {
        var hashedPassword;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcrypt.hash(password, 10)];
                case 1:
                    hashedPassword = _a.sent();
                    return [2 /*return*/, hashedPassword];
            }
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var user1, _a, _b, user2, _c, _d, user3, _e, _f, interview1, interview2, interview3;
        var _g, _h, _j, _k, _l, _m;
        return __generator(this, function (_o) {
            switch (_o.label) {
                case 0:
                    _b = (_a = prisma.user).create;
                    _g = {};
                    _h = {
                        email: 'user1@example.com',
                        fullName: 'User One'
                    };
                    return [4 /*yield*/, hashPassword("password1")];
                case 1: return [4 /*yield*/, _b.apply(_a, [(_g.data = (_h.password = _o.sent(),
                            _h.phoneNumber = '1234567890',
                            _h.isWorking = true,
                            _h.experience = 5,
                            _h.company = 'Company One',
                            _h.role = 'Developer',
                            _h.preferredRole = 'Full Stack Developer',
                            _h.currentCTC = '100000',
                            _h.expectedCTC = '150000',
                            _h.resume = 'resume1.pdf',
                            _h.photo = 'https://utfs.io/f/b844803f-8735-431e-85da-b96ceda1d1c3-ls6ya1.png',
                            _h.techstacks = ["HTML CSS", "JavaScript", "TypeScript"],
                            _h),
                            _g)])];
                case 2:
                    user1 = _o.sent();
                    _d = (_c = prisma.user).create;
                    _j = {};
                    _k = {
                        email: 'user2@example.com',
                        fullName: 'User Two'
                    };
                    return [4 /*yield*/, hashPassword("password2")];
                case 3: return [4 /*yield*/, _d.apply(_c, [(_j.data = (_k.password = _o.sent(),
                            _k.phoneNumber = '0987654321',
                            _k.isWorking = false,
                            _k.experience = 3,
                            _k.company = 'Company Two',
                            _k.role = 'Designer',
                            _k.preferredRole = 'UI/UX Designer',
                            _k.currentCTC = '80000',
                            _k.expectedCTC = '120000',
                            _k.resume = 'resume2.pdf',
                            _k.photo = 'https://utfs.io/f/b844803f-8735-431e-85da-b96ceda1d1c3-ls6ya1.png',
                            _k.techstacks = ["React.js", "Next.js", "Zod"],
                            _k),
                            _j)])];
                case 4:
                    user2 = _o.sent();
                    _f = (_e = prisma.user).create;
                    _l = {};
                    _m = {
                        email: 'user3@example.com',
                        fullName: 'User Three'
                    };
                    return [4 /*yield*/, hashPassword("password3")];
                case 5: return [4 /*yield*/, _f.apply(_e, [(_l.data = (_m.password = _o.sent(),
                            _m.phoneNumber = '1122334455',
                            _m.isWorking = true,
                            _m.experience = 7,
                            _m.company = 'Company Three',
                            _m.role = 'Manager',
                            _m.preferredRole = 'Project Manager',
                            _m.currentCTC = '200000',
                            _m.expectedCTC = '250000',
                            _m.resume = 'resume3.pdf',
                            _m.photo = 'https://utfs.io/f/b844803f-8735-431e-85da-b96ceda1d1c3-ls6ya1.png',
                            _m.techstacks = ["Redux", "Recoil", "TurboRepo", "Full Frontend"],
                            _m),
                            _l)])];
                case 6:
                    user3 = _o.sent();
                    // Create Accounts
                    return [4 /*yield*/, prisma.account.createMany({
                            data: [
                                {
                                    userId: user1.id,
                                    provider: 'github',
                                    providerAccountId: 'github-user1',
                                    expires_at: null,
                                },
                                {
                                    userId: user2.id,
                                    provider: 'google',
                                    providerAccountId: 'google-user2',
                                    expires_at: null,
                                },
                                {
                                    userId: user3.id,
                                    provider: 'credentials',
                                    providerAccountId: 'credentials-user3',
                                    expires_at: null,
                                },
                            ],
                        })];
                case 7:
                    // Create Accounts
                    _o.sent();
                    // Create Jobs
                    return [4 /*yield*/, prisma.job.createMany({
                            data: [
                                {
                                    title: 'Frontend Developer',
                                    description: 'Develop and maintain web applications.',
                                    location: 'Remote',
                                    salary: '120000',
                                    company: 'Tech Corp',
                                    link: 'https://techcorp.com/jobs/frontend-developer',
                                    requirements: ['JavaScript', 'React', 'CSS'],
                                    startDate: new Date('2023-01-01'),
                                    endDate: new Date('2023-12-31'),
                                },
                                {
                                    title: 'Backend Developer',
                                    description: 'Develop and maintain server-side applications.',
                                    location: 'On-site',
                                    salary: '130000',
                                    company: 'Backend Inc',
                                    link: 'https://backendinc.com/jobs/backend-developer',
                                    requirements: ['Node.js', 'Express', 'MongoDB'],
                                    startDate: new Date('2023-02-01'),
                                    endDate: new Date('2023-11-30'),
                                },
                                {
                                    title: 'UI/UX Designer',
                                    description: 'Design user interfaces and user experiences.',
                                    location: 'Hybrid',
                                    salary: '110000',
                                    company: 'Design Studio',
                                    link: 'https://designstudio.com/jobs/ui-ux-designer',
                                    requirements: ['Figma', 'Sketch', 'Adobe XD'],
                                    startDate: new Date('2023-03-01'),
                                    endDate: new Date('2023-10-31'),
                                },
                            ],
                        })];
                case 8:
                    // Create Jobs
                    _o.sent();
                    return [4 /*yield*/, prisma.interviewPairing.create({
                            data: {
                                user1Id: user1.id,
                                user2Id: user2.id,
                                scheduledAt: new Date('2023-03-01T09:00:00Z'),
                                isCompleted: true,
                            },
                        })];
                case 9:
                    interview1 = _o.sent();
                    return [4 /*yield*/, prisma.interviewPairing.create({
                            data: {
                                user1Id: user2.id,
                                user2Id: user3.id,
                                scheduledAt: new Date('2023-04-01T10:00:00Z'),
                                isCompleted: true,
                            },
                        })];
                case 10:
                    interview2 = _o.sent();
                    return [4 /*yield*/, prisma.interviewPairing.create({
                            data: {
                                user1Id: user3.id,
                                user2Id: user1.id,
                                scheduledAt: new Date('2023-05-01T11:00:00Z'),
                                isCompleted: true,
                            },
                        })
                        // Create Email Logs
                    ];
                case 11:
                    interview3 = _o.sent();
                    // Create Email Logs
                    return [4 /*yield*/, prisma.emailLog.createMany({
                            data: [
                                {
                                    interviewPairingId: interview1.id,
                                    emailSentAt: new Date('2023-04-01T09:00:00Z'),
                                },
                                {
                                    interviewPairingId: interview2.id,
                                    emailSentAt: new Date('2023-05-01T10:00:00Z'),
                                },
                                {
                                    interviewPairingId: interview3.id,
                                    emailSentAt: new Date('2023-06-01T11:00:00Z'),
                                },
                            ],
                        })];
                case 12:
                    // Create Email Logs
                    _o.sent();
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .then(function () {
    console.log('Seeding complete!');
})
    .catch(function (e) {
    console.error(e);
    process.exit(1);
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
